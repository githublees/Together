package com.ssafy.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.UserModifyPostReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.response.UserRes;
import com.ssafy.api.service.UserService;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import springfox.documentation.annotations.ApiIgnore;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping()
	@ApiOperation(value = "회원 가입", notes = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.") 
    @ApiResponses({
        @ApiResponse(code = 201, message = "성공"),
        @ApiResponse(code = 400, message = "유효성 검증 실패"),
        @ApiResponse(code = 403, message = "ID 중복"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@Valid @RequestBody @ApiParam(value="회원가입 정보", required = true) UserRegisterPostReq registerInfo, Errors errors) {
		if(errors.hasErrors()) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, errors.getFieldError().getDefaultMessage()));
		} else {
			//임의로 리턴된 User 인스턴스. 현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
			try {
				User user = userService.createUser(registerInfo);
				return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
			} catch (Exception e) {
				return ResponseEntity.status(403).body(BaseResponseBody.of(403, "Id duplicate error"));
			}
		}
	}
	
	@GetMapping("/me")
	@ApiOperation(value = "회원 본인 정보 조회", notes = "로그인한 회원 본인의 정보를 응답한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<UserRes> getUserInfo(@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		SsafyUserDetails userDetails = (SsafyUserDetails)authentication.getDetails();
		String userId = userDetails.getUsername();
		User user = userService.getUserByUserId(userId);
		
		return ResponseEntity.status(200).body(UserRes.of(user));
	}
	
	@PostMapping("/modify")
	@ApiOperation(value = "회원 본인 정보 수정", notes = "로그인된 회원 정보를 수정한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 400, message = "유효성 검증 실패"),
        @ApiResponse(code = 401, message = "수정 과정에서 오류 발생"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<BaseResponseBody> modifyUserInfo(@ApiIgnore Authentication authentication,
			@Valid @RequestBody @ApiParam(value="수정 정보", required = true) UserModifyPostReq modifyData, Errors errors) {
		SsafyUserDetails userDetails = (SsafyUserDetails)authentication.getDetails();
		String userId = userDetails.getUsername();
		User user = userService.getUserByUserId(userId);

		if(errors.hasErrors()) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, errors.getFieldError().getDefaultMessage()));
		} else {
			try {
				userService.setUserInfoByUserId(user, modifyData);
				return ResponseEntity.status(200).body(BaseResponseBody.of(200, "success"));
			} catch (Exception e) {
				return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
			}
		}
	}
	
	@GetMapping("/{userId}/exists")
	@ApiOperation(value = "아이디 중복 검사", notes = "중복검사 버튼 클릭 시 DB정보와 입력 정보를 비교한다.") 
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<Boolean> checkIdDuplicate(@PathVariable String userId){
		return ResponseEntity.ok(!userService.checkIdDuplicate(userId));
	}
}
