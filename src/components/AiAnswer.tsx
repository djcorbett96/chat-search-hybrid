import { useChatState } from "@yext/chat-headless-react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FaMagic } from "react-icons/fa";
import { BsArrowLeft, BsChat, BsChatFill } from "react-icons/bs";
import { useChatModeContext } from "../hooks";
import { cn } from "../utils/cn";
import { Button } from "./Button";
import { useEffect } from "react";
import MessageCard from "./cards/MessageCard";

export default function AiAnswer() {
  const messages = useChatState((s) => s.conversation.messages);
  const firstBotMessage = messages.find((m) => m.source === "BOT");
  const isLoading = useChatState((s) => s.conversation.isLoading);
  const { chatMode } = useChatModeContext();

  useEffect(() => {
    console.log(messages);
    const chatbox = document.getElementById("results");
    chatbox?.scrollTo({ top: 100, left: 100, behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={cn("flex w-full flex-col gap-4 rounded-2xl transition-all")}
    >
      {!firstBotMessage && isLoading && (
        <div className="flex flex-col gap-y-4 rounded-2xl bg-sky-100 p-4">
          <div className={cn("m-0 flex flex-row", chatMode && "hidden")}>
            <FaMagic className="my-auto mr-2 inline-block h-4 w-4" />
            <h3 className="my-0">Generating...</h3>
          </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={`bigdiv-${index}`}
              className={cn("relative h-4 w-full overflow-hidden px-10")}
            >
              {/* The light beam div */}
              <motion.div
                key={`lildiv-${index}`}
                className="absolute bottom-0 left-0 top-0 w-full bg-gradient-to-r from-white to-blue-300"
                variants={{
                  start: { marginLeft: "-50%", opacity: 0 },
                  end: { marginLeft: "100%", opacity: 1 },
                }}
                initial="start"
                animate="end"
                transition={{
                  repeatDelay: 1,
                  delay: index * 0.25, // Delay each animation by 0.25s
                  duration: 1, // Animation duration
                  repeat: Infinity, // To loop the animation
                  ease: "linear", // To move at a constant speed
                }}
              />
            </motion.div>
          ))}
        </div>
      )}
      {/* {firstBotMessage && !chatMode && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "flex flex-col gap-4 rounded-2xl bg-sky-200 p-4 transition-all"
          )}
        >
          <div className="flex flex-row">
            <FaMagic className="my-auto mr-2 inline-block h-4 w-4" />
            <h3 className="my-0">AI Answer</h3>
          </div>
          <ReactMarkdown className="prose-sm w-full list-disc text-left">
            {firstBotMessage.text}
          </ReactMarkdown>
        </motion.div>
      )} */}
      {firstBotMessage && (
        <MessageCard
          show={true}
          message={firstBotMessage}
          idx={0}
          initial={true}
        />
      )}
      {firstBotMessage && chatMode && (
        <ul className="flex flex-col gap-8" id="chatbox">
          {messages.slice(2).map((m, idx) => {
            return (
              <MessageCard
                show={chatMode}
                message={m}
                idx={idx}
                key={m.responseId}
              />
            );
          })}
          <AnimatePresence>
            {isLoading && (
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn("flex py-2 transition-all")}
              >
                <span className="circle animate-loader"></span>
                <span className="circle animation-delay-200 animate-loader"></span>
                <span className="circle animation-delay-400 animate-loader"></span>
              </motion.li>
            )}
          </AnimatePresence>
        </ul>
      )}
      {/* {chatMode && (
        <motion.div
          key="chat-panel"
          initial={{ y: "full" }}
          animate={{ y: 0 }}
          exit={{ y: "full" }}
          transition={{ duration: 0.25 }}
          className=" h-full w-full"
        >
          <div className="mx-auto h-full w-full shrink-0">
            <Button
              className="w-fit"
              onClick={() => {
                setChatMode(false);
              }}
            >
              <BsArrowLeft className="mx-auto my-auto mr-2 inline-block h-4 w-4" />
              Back
            </Button>
            <ChatPanel
              showTimestamp={false}
              customCssClasses={{
                container: "bg-slate-50 max-h-[700px] mt-2",
                messagesScrollContainer:
                  "overflow-scroll flex flex-col-reverse",
                messageBubbleCssClasses: {
                  bubble__user: "bg-primary rounded-lg",
                  bubble__bot: "bg-gray-200 rounded-lg",
                  feedbackButtonsCssClasses: {
                    container:
                      "absolute -top-3 -right-2 hidden gap-1 group-hover:flex",
                    thumbsDownButton: "bg-gray-700 hover:bg-gray-700/80",
                    thumbsUpButton: "bg-gray-700 hover:bg-gray-700/80",
                  },
                },
              }}
            />
          </div>
        </motion.div>
      )} */}
    </div>
  );
}
