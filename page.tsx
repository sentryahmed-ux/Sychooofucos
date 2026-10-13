'use client';
import { useState } from 'react';
import DailyIframe from '@daily-co/daily-js';

export default function FocusApp() {
  const [inRoom, setInRoom] = useState(false);

  const startFocusSession = () => {
    setInRoom(true);
    const callFrame = DailyIframe.createFrame({
      iframeStyle: {
        position: 'fixed',
        top: '80px',
        left: '0',
        width: '100%',
        height: 'calc(100% - 80px)',
        border: '0',
        zIndex: '99'
      }
    });
    callFrame.join({ url: 'https://daily.co' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between font-sans">
      <header className="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-950">
        <h1 className="text-xl font-bold text-indigo-400">⏱️ غرف التركيز المشترك Sychooo Fucos</h1>
        {inRoom && <div className="text-sm bg-red-600 px-3 py-1 rounded-full animate-pulse">جلسة عمل نشطة</div>}
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {!inRoom ? (
          <div className="max-w-md">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">اضمن التزامك، انجز مهامك بصمت</h2>
            <p className="text-gray-400 mb-8 text-sm">
              ادخل في غرفة فيديو ثنائية صامتة مع شريك عمل حقيقي لمدة 25 دقيقة لزيادة إنتاجيتك الآن مجاناً.
            </p>
            <button 
              onClick={startFocusSession}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-lg"
            >
              ابدأ جلسة تركيز فورية 🚀
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">يتم تحميل نافذة الفيديو... التزم بالصمت والتركيز</div>
        )}
      </main>

      <footer className="p-4 bg-gray-950 text-center border-t border-gray-850 text-xs text-gray-500">
        <p>تخطيت الحد المجاني؟ <a href="#" className="text-indigo-400 underline font-medium">اشترك في الباقة الاحترافية بـ 5$ فقط</a> لفتح غرف غير محدودة.</p>
      </footer>
    </div>
  );
}
