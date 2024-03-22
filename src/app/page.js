import Profile from "@/components/Profile";
import ProfileName from "@/components/ProfileName";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ProfileName />
      <br />
      <Profile />
    </main>
  );
}
