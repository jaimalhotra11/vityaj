import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Clock, Globe2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
  expectInput?: 'country' | 'email' | 'phone' | 'name';
}

interface UserInfo {
  country?: string;
  email?: string;
  phone?: string;
  name?: string;
}

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "China", 
  "India", "Germany", "France", "Japan", "Brazil", "South Korea",
  "Russia", "Italy", "Spain", "Mexico", "Saudi Arabia", "UAE",
  "Singapore", "Malaysia", "Nepal"
];

const mainOptions = [
  "Study in India Guide",
  "University Programs",
  "Visa Assistance",
  "Accommodation Help",
  "Cultural Experience",
  "Financial Planning",
  "Book Consultation",
  "Success Stories",
  "Travel Tips",
  "Safety & Support",
  "Campus Life",
  "Application Help"
];

const responseDatabase = {
  "Study in India Guide": {
    text: "India offers a unique blend of traditional wisdom and modern education. Here's what makes it special:\n\n" +
          "🎓 World-class institutions\n" +
          "💰 Affordable education\n" +
          "🌏 Rich cultural experience\n" +
          "🚀 Growing job opportunities\n\n" +
          "Would you like to know more about:",
    options: ["Education System", "Top Universities", "Required Documents", "Application Timeline"]
  },
  "Education System": {
    text: "The Indian education system is comprehensive and globally recognized:\n\n" +
          "📚 4-year undergraduate programs\n" +
          "🎯 Semester-based assessment\n" +
          "🌟 Choice-based credit system\n" +
          "🔍 Research-oriented approach\n\n" +
          "Key features:\n" +
          "• Modern curriculum aligned with industry needs\n" +
          "• Practical training and internships\n" +
          "• International collaboration opportunities\n" +
          "• English as medium of instruction\n\n" +
          "Would you like to explore:",
    options: ["Academic Calendar", "Grading System", "Course Structure", "Back to Study Guide"]
  },
  "Top Universities": {
    text: "India's leading institutions are known for excellence:\n\n" +
          "🏛️ IITs (Indian Institutes of Technology)\n" +
          "🏥 AIIMS (All India Institute of Medical Sciences)\n" +
          "💼 IIMs (Indian Institutes of Management)\n" +
          "🎨 National Institutes of Design\n\n" +
          "Popular Universities:\n" +
          "• Delhi University\n" +
          "• Manipal University\n" +
          "• VIT University\n" +
          "• BITS Pilani\n\n" +
          "Learn more about:",
    options: ["University Rankings", "Campus Facilities", "Faculty Profiles", "Back to Study Guide"]
  },
  "Required Documents": {
    text: "Essential documents for your application:\n\n" +
          "📝 Academic Documents:\n" +
          "• Academic transcripts\n" +
          "• Standardized test scores\n" +
          "• English proficiency (IELTS/TOEFL)\n\n" +
          "🔖 Personal Documents:\n" +
          "• Valid passport\n" +
          "• Passport-size photographs\n" +
          "• Birth certificate\n\n" +
          "💼 Additional Requirements:\n" +
          "• Statement of purpose\n" +
          "• Letters of recommendation\n" +
          "• Financial statements\n\n" +
          "Need help with:",
    options: ["Document Authentication", "Translation Services", "Submission Process", "Back to Study Guide"]
  },
  "Application Timeline": {
    text: "Key dates for your application journey:\n\n" +
          "🗓️ Fall Intake (August/September):\n" +
          "• Application Start: November\n" +
          "• Early Decision: January\n" +
          "• Regular Decision: March\n" +
          "• Visa Process: April-June\n\n" +
          "📅 Spring Intake (January/February):\n" +
          "• Application Start: May\n" +
          "• Early Decision: July\n" +
          "• Regular Decision: September\n" +
          "• Visa Process: October-December\n\n" +
          "Want to know about:",
    options: ["Important Deadlines", "Application Steps", "Visa Timeline", "Back to Study Guide"]
  },
  "University Programs": {
    text: "India offers diverse programs across various fields. Popular choices include:\n\n" +
          "👨‍💻 Engineering & Technology\n" +
          "⚕️ Medical Sciences\n" +
          "🎨 Arts & Humanities\n" +
          "📊 Business Management\n\n" +
          "Which field interests you?",
    options: ["Engineering", "Medical", "Arts", "Management", "Other Programs"]
  },
  "Engineering": {
    text: "Engineering programs in India are highly regarded:\n\n" +
          "🔧 Popular Branches:\n" +
          "• Computer Science & Engineering\n" +
          "• Mechanical Engineering\n" +
          "• Electronics & Communication\n" +
          "• Civil Engineering\n\n" +
          "💡 Key Features:\n" +
          "• Industry partnerships\n" +
          "• Modern laboratories\n" +
          "• Research opportunities\n" +
          "• International collaborations\n\n" +
          "Learn more about:",
    options: ["Course Details", "Career Prospects", "Research Opportunities", "Back to Programs"]
  },
  "Medical": {
    text: "Medical education in India offers comprehensive training:\n\n" +
          "🏥 Programs Available:\n" +
          "• MBBS (Bachelor of Medicine)\n" +
          "• BDS (Bachelor of Dental Surgery)\n" +
          "• BAMS (Ayurvedic Medicine)\n" +
          "• Nursing Programs\n\n" +
          "⚕️ Features:\n" +
          "• World-class facilities\n" +
          "• Practical training\n" +
          "• Clinical rotations\n" +
          "• Research exposure\n\n" +
          "Explore more:",
    options: ["Admission Process", "Hospital Training", "Specializations", "Back to Programs"]
  },
  "Visa Assistance": {
    text: "Our expert visa assistance includes:\n\n" +
          "📝 Document preparation\n" +
          "✅ Application review\n" +
          "🎯 Interview preparation\n" +
          "⏱️ Timeline management\n\n" +
          "How can we help you with your visa?",
    options: ["Visa Requirements", "Document Checklist", "Book Visa Consultation", "Track Application"]
  },
  "Visa Requirements": {
    text: "Essential requirements for your student visa:\n\n" +
          "📋 Basic Requirements:\n" +
          "• Valid passport\n" +
          "• University acceptance letter\n" +
          "• Financial proof\n" +
          "• Medical insurance\n\n" +
          "🔍 Additional Documents:\n" +
          "• Visa application form\n" +
          "• Passport photos\n" +
          "• Statement of purpose\n" +
          "• Police clearance\n\n" +
          "Need help with:",
    options: ["Application Process", "Interview Tips", "Fee Structure", "Back to Visa Help"]
  },
  "Accommodation Help": {
    text: "We ensure you find the perfect home away from home:\n\n" +
          "🏠 On-campus housing\n" +
          "🏢 Private apartments\n" +
          "👥 Shared accommodations\n" +
          "🏨 Short-term stays\n\n" +
          "What type of accommodation are you looking for?",
    options: ["Campus Housing", "Private Rentals", "Temporary Stay", "View All Options"]
  },
  "Campus Housing": {
    text: "On-campus accommodation options:\n\n" +
          "🏘️ Types Available:\n" +
          "• Single rooms\n" +
          "• Shared rooms\n" +
          "• Studio apartments\n" +
          "• Family housing\n\n" +
          "✨ Features:\n" +
          "• 24/7 security\n" +
          "• Dining facilities\n" +
          "• Internet access\n" +
          "• Laundry services\n\n" +
          "Learn more about:",
    options: ["Facilities", "Application Process", "Fee Structure", "Back to Accommodation"]
  },
  "Financial Planning": {
    text: "Let's plan your finances wisely:\n\n" +
          "💰 Estimated Costs:\n" +
          "• Tuition fees: $3,000-$8,000/year\n" +
          "• Accommodation: $1,000-$3,000/year\n" +
          "• Living expenses: $2,000-$4,000/year\n" +
          "• Insurance & others: $500-$1,000/year\n\n" +
          "💡 Financial Options:\n" +
          "• Scholarships\n" +
          "• Education loans\n" +
          "• Part-time work\n" +
          "• Payment plans\n\n" +
          "Explore:",
    options: ["Scholarship Options", "Bank Loans", "Part-Time Work", "Cost Calculator"]
  },
  "Success Stories": {
    text: "Hear from our successful students:\n\n" +
          "🌟 Recent Success Stories:\n\n" +
          "Sarah from USA:\n" +
          '"The cultural exposure and quality education exceeded my expectations!"\n\n' +
          "Mohammed from UAE:\n" +
          '"Vityaz Global made my transition to studying in India seamless."\n\n' +
          "Elena from Russia:\n" +
          '"The support I received was exceptional throughout my journey."\n\n' +
          "Learn more about:",
    options: ["Student Testimonials", "Alumni Network", "Career Outcomes", "Study Experience"]
  },
  "Safety & Support": {
    text: "Your safety and well-being are our priority:\n\n" +
          "🛡️ Safety Measures:\n" +
          "• 24/7 campus security\n" +
          "• Emergency response team\n" +
          "• Medical facilities\n" +
          "• Insurance coverage\n\n" +
          "🤝 Support Services:\n" +
          "• International student office\n" +
          "• Mental health counseling\n" +
          "• Academic mentoring\n" +
          "• Cultural integration programs\n\n" +
          "Learn about:",
    options: ["Emergency Services", "Health Insurance", "Student Support", "Safety Guidelines"]
  },
  "Cultural Experience": {
    text: "Experience the vibrant Indian culture:\n\n" +
          "🎭 Cultural festivals\n" +
          "🍜 Culinary adventures\n" +
          "🎨 Art & architecture\n" +
          "👥 Local connections\n\n" +
          "What aspects of Indian culture interest you?",
    options: ["Festivals", "Food Guide", "Cultural Activities", "Local Customs"]
  },
  "Festivals": {
    text: "Experience India's colorful festivals:\n\n" +
          "🎆 Major Festivals:\n" +
          "• Diwali - Festival of Lights\n" +
          "• Holi - Festival of Colors\n" +
          "• Navratri - Nine Nights of Dance\n" +
          "• Pongal - Harvest Festival\n\n" +
          "🎉 Campus Celebrations:\n" +
          "• Cultural nights\n" +
          "• International food festivals\n" +
          "• Music and dance events\n" +
          "• Traditional art workshops\n\n" +
          "Explore more:",
    options: ["Festival Calendar", "Celebration Guide", "Event Photos", "Back to Culture"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: "✨ Namaste! I'm Veda, your personal guide to studying in India! 🎓\n\n" +
              "At Vityaz Global, we're here to make your dream of studying in India a reality.\n\n" +
              "To provide you with the best guidance, could you please tell me which country you're from?",
        sender: 'bot',
        timestamp: new Date(),
        options: countries,
        expectInput: 'country'
      }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-]{8,}$/.test(phone);
  };

  const handleUserInput = (input: string, expectedInput?: string) => {
    switch (expectedInput) {
      case 'country':
        if (countries.includes(input)) {
          setUserInfo(prev => ({ ...prev, country: input }));
          return {
            text: "Great! To create your personalized guide to studying in India, I'll need your email address. Don't worry, we keep your information secure and confidential! 🔒",
            expectInput: 'email'
          };
        }
        return {
          text: "Please select your country from the list to help me provide you with relevant information.",
          options: countries,
          expectInput: 'country'
        };
      
      case 'email':
        if (validateEmail(input)) {
          setUserInfo(prev => ({ ...prev, email: input }));
          return {
            text: "Perfect! Now, please share your phone number so we can reach you with important updates and opportunities. 📱",
            expectInput: 'phone'
          };
        }
        return {
          text: "Oops! That email format doesn't look quite right. Please enter a valid email address.",
          expectInput: 'email'
        };
      
      case 'phone':
        if (validatePhone(input)) {
          setUserInfo(prev => ({ ...prev, phone: input }));
          return {
            text: "Excellent! And finally, what's your name? Let's make this conversation more personal! ✨",
            expectInput: 'name'
          };
        }
        return {
          text: "Please enter a valid phone number with country code (e.g., +1234567890).",
          expectInput: 'phone'
        };
      
      case 'name':
        if (input.length > 0) {
          setUserInfo(prev => ({ ...prev, name: input }));
          return {
            text: `Wonderful to meet you, ${input}! 🌟\n\nI'm here to guide you through every step of your journey to study in India. What would you like to explore first?`,
            options: mainOptions
          };
        }
        return {
          text: "Please share your name with me!",
          expectInput: 'name'
        };
      
      default:
        if (responseDatabase[input as keyof typeof responseDatabase]) {
          return responseDatabase[input as keyof typeof responseDatabase];
        }
        return {
          text: "I'm here to help you with any questions about studying in India! What would you like to know?",
          options: mainOptions
        };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      setIsTyping(true);

      const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
      const response = handleUserInput(message, lastBotMessage?.expectInput);

      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          sender: 'bot',
          timestamp: new Date(),
          options: response.options,
          expectInput: response.expectInput
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, Math.random() * 1000 + 500);
    }
  };

  const handleOptionClick = (option: string) => {
    setMessage(option);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all z-50 group"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        ) : (
          <Globe2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-50 transition-all transform-gpu">
          <div className="p-4 border-b bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Veda - Your Study Guide</h3>
                <p className="text-sm text-purple-100">Vityaz Global Assistant</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-white" style={{ scrollBehavior: 'smooth' }}>
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div
                  className={`flex gap-2 ${
                    msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  )}
                  <div
                    className={`${
                      msg.sender === 'bot'
                        ? 'bg-white text-gray-800 border border-purple-100'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    } rounded-lg p-3 max-w-[80%] shadow-sm`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="whitespace-pre-wrap">{msg.text}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-xs opacity-70">
                      <Clock className="w-3 h-3" />
                      {formatTimestamp(msg.timestamp)}
                    </div>
                  </div>
                  {msg.sender === 'user' && (
                    <User className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  )}
                </div>

                {msg.options && (
                  <div className="ml-7 flex flex-wrap gap-2">
                    {msg.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="text-sm bg-white border border-purple-200 text-purple-600 px-3 py-1 rounded-full hover:bg-purple-50 transition-colors shadow-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-start">
                <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div className="bg-white border border-purple-100 rounded-lg p-3 max-w-[80%] shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                aria-label="Message input"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;