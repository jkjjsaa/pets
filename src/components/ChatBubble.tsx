import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-white">Chat with us</h3>
                <p className="text-xs text-white/90">We're online now!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-700">
                  Hi there! 👋 How can we help you find your perfect pet today?
                </p>
                <p className="text-xs text-gray-400 mt-1">Just now</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-400 transition-colors text-sm"
              />
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {!isOpen && (
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
      )}
    </div>
  );
}
