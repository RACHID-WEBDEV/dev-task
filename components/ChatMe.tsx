"use client";
import React, { useState } from "react";
import classNames from "classnames";

import {
  CloseIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  MessageIcons,
  WhatsAppIcon,
  XIcon,
} from "@/public/SvgsIcon";

const ChatRevveMe = () => {
  const [show, setShow] = useState(false);
  const showChatsIcons = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className={""}>
      <div className="main-btn z-50" id="main-btn" onClick={showChatsIcons}>
        <div className="flex items-center justify-center relative">
          {/* <MessageIcons /> */}

          {show ? (
            <CloseIcon className="transition-all ease-in-out duration-300" />
          ) : (
            <MessageIcons className="w-6 h-6 transition-all ease-in-out duration-300" />
          )}
          <div className="top-[-9px] left-7 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white  rounded-full">
            <span className="bg-green-700 w-2.5 h-2.5 block rounded-full notifier"></span>
          </div>
        </div>
      </div>
      <div className="sub-btns">
        <div
          className={classNames(
            "btn1 opacity-0 pointer-events-none",
            { "translate-x-[-55px] rotate-[1080deg]": show },
            { "translate-x-[5px] left-0": !show }
          )}
          id="btn1"
        >
          <center>
            <a href="" target="blank">
              <WhatsAppIcon className="fill-primary" width={28} height={28} />
            </a>
          </center>
        </div>
        <div
          className={classNames(
            "btn2 opacity-0 pointer-events-none",
            { "translate-x-[-121px] rotate-[1080deg]": show },
            { "translate-x-0": !show }
          )}
          id="btn2"
        >
          <center>
            <a href="#">
              <EmailIcon width={28} height={28} className="fill-white" />
            </a>
          </center>
        </div>
        <div
          className={classNames(
            "btn3 opacity-0 pointer-events-none",
            { "translate-x-[-182px] rotate-[1080deg]": show },
            { "translate-x-0": !show }
          )}
          id="btn3"
        >
          <center>
            <a target="blank" href="#">
              <InstagramIcon width={28} height={28} className="fill-white" />
            </a>
          </center>
        </div>
        <div
          className={classNames(
            "btn4 opacity-0 pointer-events-none",
            { "translate-x-[-244px] rotate-[1080deg]": show },
            { "translate-x-0": !show }
          )}
          id="btn4"
        >
          <center>
            <a href="#" target="blank">
              <FacebookIcon width={28} height={28} className="fill-white" />
            </a>
          </center>
        </div>

        <div
          className={classNames(
            "touch btn5 bg-[#49E670]",
            { "translate-y-[-58px] rotate-[1080deg]": show },
            { "translate-y-0": !show }
          )}
          id="btn5"
        >
          <center>
            <a href="https://wa.me/message/U5ERLJRIPL7UB1" target="blank">
              <WhatsAppIcon />
            </a>
          </center>
        </div>
        <div
          className={classNames(
            "touch btn6 bg-gray-900",
            { "translate-y-[-116px] rotate-[1080deg]": show },
            { "translate-y-0": !show }
          )}
          id="btn6"
        >
          <center>
            <a href="https://x.com/InfoRevve" target="blank">
              <XIcon />
            </a>
          </center>
        </div>
        <div
          className={classNames(
            "touch btn7 bg-blue-600",
            { "translate-y-[-172px] rotate-[1080deg]": show },
            { "translate-y-0": !show }
          )}
          id="btn7"
        >
          <center>
            <a
              href="https://facebook.com/profile.php?id=61572466705088&sk=about"
              target="blank"
            >
              <FacebookIcon />
            </a>
          </center>
        </div>
        <div
          className={classNames(
            "touch btn8 opacity-0 pointer-events-none",
            { "translate-y-[-228px] rotate-[1080deg]": show },
            { "translate-y-0": !show }
          )}
          id="btn8"
        >
          <center>
            <h2>T</h2>
          </center>
        </div>
        <div
          className={classNames(
            "touch btn9 opacity-0 pointer-events-none",
            { "translate-y-[-290px] rotate-[1080deg]": show },
            { "translate-y-0": !show }
          )}
          id="btn9"
        >
          <center>
            <h4 className="text-base">Let&apos;s</h4>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ChatRevveMe;
