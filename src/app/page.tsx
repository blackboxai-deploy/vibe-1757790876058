"use client";

import { useState, useEffect } from "react";
import EnhancedGameEngine from "@/components/EnhancedGameEngine";
import AvatarCreator from "@/components/AvatarCreator";
import Beatmaker from "@/components/Beatmaker";
import EmailSystem from "@/components/EmailSystem";

type GameState = "menu" | "avatar" | "beatmaker" | "email" | "playing" | "paused";

export default function HomePage() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [playerAvatar, setPlayerAvatar] = useState<string | null>(null);
  const [playerName] = useState("Justin Devon Mitchell");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-yellow-600 flex items-center justify-center">
        <div className="text-center animate-pulse">
          <h1 className="text-6xl font-orbitron font-black text-yellow-400 mb-4 tracking-wider">
            STREET EMPIRE
          </h1>
          <h2 className="text-3xl font-bold text-red-400 mb-8">BUSINESS WARS</h2>
          <div className="text-lg text-white">
            <p className="mb-2">Justin Devon Mitchell</p>
            <p className="text-yellow-300">ACTION PACK</p>
          </div>
          <div className="mt-8">
            <div className="w-32 h-1 bg-yellow-400 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleAvatarCreated = (avatarData: string) => {
    setPlayerAvatar(avatarData);
    setGameState("menu");
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-yellow-900/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f9bd0d8-f9f6-42d4-8ebb-5822345e75dd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {gameState === "menu" && (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-yellow-400 mb-4 tracking-wider">
              STREET EMPIRE
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-red-400 mb-2">BUSINESS WARS</h2>
            <p className="text-lg text-gray-300">by {playerName}</p>
            <p className="text-yellow-300 font-semibold">ACTION PACK EDITION</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Main Game */}
            <div 
              onClick={() => setGameState("playing")}
              className="bg-gradient-to-br from-red-800/50 to-red-900/80 border border-red-500 rounded-lg p-8 cursor-pointer hover:from-red-700/60 hover:to-red-800/90 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">START MISSION</h3>
                <p className="text-gray-300">Begin your criminal empire</p>
              </div>
            </div>

            {/* Avatar Creator */}
            <div 
              onClick={() => setGameState("avatar")}
              className="bg-gradient-to-br from-blue-800/50 to-blue-900/80 border border-blue-500 rounded-lg p-8 cursor-pointer hover:from-blue-700/60 hover:to-blue-800/90 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">CREATE AVATAR</h3>
                <p className="text-gray-300">Turn your photo into a character</p>
              </div>
            </div>

            {/* Beatmaker */}
            <div 
              onClick={() => setGameState("beatmaker")}
              className="bg-gradient-to-br from-green-800/50 to-green-900/80 border border-green-500 rounded-lg p-8 cursor-pointer hover:from-green-700/60 hover:to-green-800/90 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">BEATMAKER</h3>
                <p className="text-gray-300">Create beats with autotune</p>
              </div>
            </div>

            {/* Email System */}
            <div 
              onClick={() => setGameState("email")}
              className="bg-gradient-to-br from-purple-800/50 to-purple-900/80 border border-purple-500 rounded-lg p-8 cursor-pointer hover:from-purple-700/60 hover:to-purple-800/90 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">BUSINESS EMAIL</h3>
                <p className="text-gray-300">Check contracts & deals</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {gameState === "playing" && (
        <EnhancedGameEngine 
          onBack={() => setGameState("menu")} 
          playerAvatar={playerAvatar}
          playerName={playerName}
        />
      )}

      {gameState === "avatar" && (
        <AvatarCreator 
          onAvatarCreated={handleAvatarCreated}
          onBack={() => setGameState("menu")}
        />
      )}

      {gameState === "beatmaker" && (
        <Beatmaker onBack={() => setGameState("menu")} />
      )}

      {gameState === "email" && (
        <EmailSystem 
          onBack={() => setGameState("menu")}
          playerName={playerName}
        />
      )}
    </div>
  );
}