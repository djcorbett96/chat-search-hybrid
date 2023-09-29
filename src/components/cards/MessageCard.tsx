import { BsChatFill } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Button } from "../Button";
import { useChatModeContext } from "../../hooks";
import { Message } from "@yext/chat-headless-react";
import { cn } from "../../utils/cn";

interface MessageCardProps {
  message: Message;
  idx: number;
  initial?: boolean;
}

const MessageCard = ({ initial, message, idx }: MessageCardProps) => {
  const { chatMode, setChatMode } = useChatModeContext();
  console.log(idx);
  return (
    <li
      className={cn(
        "flex flex-col gap-4 rounded-2xl p-4 transition-all",
        message.source === "USER" ? "w-fit self-end bg-gray-100" : "bg-sky-100"
      )}
      key={idx}
    >
      {message.source === "BOT" && (
        <div className="flex flex-row">
          <FaMagic className="my-auto mr-2 inline-block h-4 w-4" />
          <h3 className="my-0">AI Answer</h3>
        </div>
      )}
      <ReactMarkdown className="prose-sm w-full list-disc text-left">
        {message.text}
      </ReactMarkdown>
      {initial && (
        <Button
          className="w-fit"
          onClick={() => setChatMode(true)}
          disabled={chatMode}
        >
          <div className="flex items-center gap-2">
            <BsChatFill />
            <p>{chatMode ? "Asking a follow up" : "Ask a follow up"}</p>
          </div>
        </Button>
      )}
    </li>
  );
};

export default MessageCard;
