"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { customAlphabet } from "nanoid";
import Button from "@/components/Button";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import Header from "@/components/Header";
import KeyboardFilled from "@/components/icons/KeyboardFilled";
import PlainButton from "@/components/PlainButton";
import TextField from "@/components/TextField";
import Videocall from "@/components/icons/Videocall";
import { AppContext } from "@/contexts/AppProvider";

const IMAGE_SIZE = 248;

const Home = () => {
  const isSignedIn = true;
  const { setNewMeeting } = useContext(AppContext);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleCode = () => {
    console.log("Joining with code", code);
  };

  const generateMeetingId = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const nanoid = customAlphabet(alphabet, 4);
    return `${nanoid(3)}-${nanoid(4)}-${nanoid(3)}`;
  };
  const handleNewMeeting = () => {
    setNewMeeting(true);
    router.push(`/${generateMeetingId()}`);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-2xl p-4 pt-7 text-center inline-flex flex-col items-center basis-auto shrink-0">
          <h1 className="text-5xl tracking-normal text-black pb-2">
            Video calls and meetings for everyone
          </h1>
          <p className="text-1x text-gray pb-8">
            Connect, collaborate, and celebrate from anywhere with Moogle Meet
          </p>
        </div>
        <div className="w-full max-w-xl flex justify-center">
          <div className="flex flex-col items-start sm:flex-row gap-6 sm:gap-2 sm:items-center justify-center">
            {isSignedIn && (
              <ButtonWithIcon onClick={handleNewMeeting} icon={<Videocall />}>
                New meeting
              </ButtonWithIcon>
            )}
            {!isSignedIn && <Button size="md">Sign in</Button>}
            <div className="flex items-center gap-2 sm:ml-4">
              <TextField
                label="Code or link"
                name="code"
                placeholder="Enter a code or link"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                icon={<KeyboardFilled />}
              />
              <PlainButton onClick={handleCode} disabled={!code}>
                Join
              </PlainButton>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto border-b border-b-border-gray self-stretch mt-8 mb-20" />
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
            alt="Get a link you can share"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
          <div className="flex flex-col gap-2 text-center max-w-sm">
            <h2 className="text-2xl tracking-normal text-black">
              Get a link you can share
            </h2>
            <p className="font-roboto text-sm text-black pb-8 grow">
              Click <span className="font-bold">New meeting</span> to get a link
              you can send to people you want to meet with
            </p>
          </div>
        </div>
        <footer className="w-full max-w-xl mt-20 pb-4 text-start">
          <div className="text-xs text-gray tracking-wider">
            <span className="cursor-pointer">
              <a className="text-meet-blue hover:underline" href="#">
                Learn more
              </a>{" "}
              about Moogle Meet
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
