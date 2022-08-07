import Navbar from "../components/mainpage/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import CustomLi from "../components/guide/customLi";

export default function Faq() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 2,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        },
      }}
    >
      <Navbar />
      {/* <section className="w-1/2 mx-auto mt-10">
      <div className="">
        <div className="question">
          <p>Q. How can I receive the PFP image?</p>
        </div>
        <div className="answer">
          <p>• Exact date will be announced through our official Discord channel.</p>
        </div>
        <hr style={{width: "100%", size:"2px"}} />
      </div>
    </section> */}

      <section
        style={{ marginTop: "15vmin" }}
        className="w-1/2 h-screen mx-auto text-lg"
      >
        <h1 className="text-3xl" tabIndex="0">
          자주 묻는 질문
        </h1>
        <ul>
          <CustomLi
            text="회의에 참여하기 위해선 어떻게 해야 하죠?"
            description={[
              "회의에 참여하기 위해서, 2가지 방법이 있습니다.",
              <br></br>,
              "1. 내 회의실을 클릭하여 자신의 회의초대 코드를 복사하고 다른 사람에게 공유하여 회의에 참가할 수 있습니다.",
              <br></br>,
              "2. 회의 참가를 클릭하여 호스트에게 제공받은 회의코드를 입력하여 대기실로 입장한 후 회의에 참가할 수 있습니다.",
            ]}
            key="1"
          ></CustomLi>
          <CustomLi
            text="TTS(Text-to-Speech, 텍스트 -> 음성 변환)기능이 작동하지 않아요. 어떻게 해야 하죠?"
            description={[
              "비장애인, 청각 장애인의 경우 TTS 기능을 사용하실 수 없습니다. TTS 기능을 제공하는 유형은 다음과 같습니다.",
              <br></br>,
              "1. 시각 장애인 유형의 경우",
              <br></br>,
              "2. 청각 장애인이 채팅을 보낸 경우",
              <br></br>,
              "이 외의 상황에서 TTS 기능을 제공하지 않습니다.",
            ]}
            text="STT(Speech-to-Text, 음성 -> 텍스트 변환) 기능을 이용하기 위해선 어떻게 해야 하죠?"
            description={[
              "청각장애인이시라면 별도로 설정하실 것은 없습니다!",
              <br></br>,
              "Together가 자동으로 다른 이의 음성을 인식하여 말풍선으로 띄우기 때문이죠.",
            ]}
            key="2"
          ></CustomLi>
          <CustomLi
            text="TTS 기능을 이용하기 위해선 어떻게 해야 하죠?"
            description={[
              "시각장애인이시라면 별도로 설정하실 것은 없습니다!",
              <br></br>,
              "Together가 자동으로 다른 이의 채팅을 읽어주기 때문이죠.",
              <br></br>,
              "자체 TTS 기능을 이용하신다면 채팅창의 스위치 버튼을 이용하여 TTS 기능을 비활성화시키실 수도 있습니다.",
            ]}
            key="3"
          ></CustomLi>
          {/* <CustomLi
            text="얄리 얄리 얄라셩, 얄라리 얄라"
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="2"
          ></CustomLi>
          <CustomLi
            text="STT(Speech-to-Text, 음성 -> 텍스트 변환) 기능을 이용하기 위해선 어떻게 해야 하죠?"
            description={[
              "청각장애인이시라면 별도로 설정하실 것은 없습니다!",
              <br></br>,
              "Together가 자동으로 다른 이의 음성을 인식하여 말풍선으로 띄우기 때문이죠.",
            ]}
            key="3"
          ></CustomLi>
          <CustomLi
            text="TTS 기능을 이용하기 위해선 어떻게 해야 하죠?"
            description={[
              "시각장애인이시라면 별도로 설정하실 것은 없습니다!",
              <br></br>,
              "Together가 자동으로 다른 이의 채팅을 읽어주기 때문이죠.",
              <br></br>,
              "자체 TTS 기능을 이용하신다면 채팅창의 스위치 버튼을 이용하여 TTS 기능을 비활성화시키실 수도 있습니다.",
            ]}
            key="4"
          ></CustomLi>
<<<<<<< HEAD
=======
          <CustomLi
            text="별을 노래하는 마음으로 모든 죽어 가는 것을 사랑해야지"
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="5"
          ></CustomLi>
          <CustomLi
            text="그리고 나한테 주어진 길을 걸어가야겠다."
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="6"
          ></CustomLi>
          <CustomLi
            text="오늘 밤에도 별이 바람에 스치운다."
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="7"
          ></CustomLi>
          <CustomLi
            text="창 밖에 밤비가 속살거려 육첩방(六疊房)은 남의 나라,"
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="8"
          ></CustomLi>
          <CustomLi
            text="시인이란 슬픈 천명(天命)인 줄 알면서도 한 줄 시를 적어 볼까,"
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="9"
          ></CustomLi>
          <CustomLi
            text="땀내와 사랑내 포근히 품긴 보내 주신 학비 봉투를 받아"
            description="음성인식 자막 기능은 Together에서 기본으로 제공하는 기능입니다. 화상 회의 내에 자동으로 생성되는 말풍선으로 자막이 제공되며, 말풍선 기능의 사용이 필요하지 않은 경우, 토글 버튼을 통해 자막 기능을 끌 수 있습니다."
            key="10"
          ></CustomLi> */}
        </ul>
      </section>
      <Footer />
    </motion.div>
  );
}
