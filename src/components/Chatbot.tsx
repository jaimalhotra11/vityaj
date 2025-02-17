import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isFollowUp?: boolean;
  options?: string[];
}

// Enhanced response patterns with more natural conversation flow
const responsePatterns = [
  // Greetings and Small Talk
  {
    pattern: /\b(hi|hello|hey|howdy|greetings)\b/i,
    responses: [
      {
        text: "👋 Hello! I'm your friendly AI assistant. How may I assist you today?",
        options: [
          "Tell me about admissions",
          "What are the fee structures?",
          "Scholarship information",
          "How are you today?"
        ]
      }
    ]
  },
  {
    pattern: /how are you|how('s| is) it going/i,
    responses: [
      {
        text: "I'm doing great, thank you for asking! I'm excited to help you today. What would you like to know about?",
        options: [
          "Tell me about the university",
          "Admission process",
          "Available programs",
          "Campus life"
        ]
      }
    ]
  },
  {
    pattern: /thank(s| you)/i,
    responses: [
      {
        text: "You're welcome! Is there anything else you'd like to know?",
        options: [
          "Yes, another question",
          "No, that's all for now"
        ]
      }
    ]
  },
  {
    pattern: /bye|goodbye|see you/i,
    responses: [
      {
        text: "Goodbye! Feel free to come back if you have any more questions. Have a great day! 👋",
        options: [
          "Start new conversation",
          "Close chat"
        ]
      }
    ]
  },

  // Admission Related
  {
    pattern: /\b(admission|apply|application)\b/i,
    responses: [
      {
        text: "Our admission process is designed to be straightforward and student-friendly. Here's what you need to know:",
        options: [
          "Academic requirements",
          "Application deadlines",
          "Required documents",
          "Application fee"
        ]
      }
    ]
  },
  {
    pattern: /\b(academic|requirements|grades)\b/i,
    responses: [
      {
        text: "For academic requirements, we look at several factors:",
        options: [
          "Minimum GPA",
          "Required test scores (SAT/ACT)",
          "Letters of recommendation",
          "Extracurricular activities"
        ]
      }
    ]
  },
  {
    pattern: /\b(deadline|dates|when)\b/i,
    responses: [
      {
        text: "Here are our important application deadlines:",
        options: [
          "Early Decision",
          "Regular Decision",
          "Transfer Students",
          "International Students"
        ]
      }
    ]
  },

  // Financial Information
  {
    pattern: /\b(fee|cost|tuition|expensive)\b/i,
    responses: [
      {
        text: "Our tuition fees are competitive and we offer various payment plans. Here's a detailed breakdown:",
        options: [
          "Undergraduate fees",
          "Graduate fees",
          "International fees",
          "Payment plans",
          "Financial aid options"
        ]
      }
    ]
  },
  {
    pattern: /\b(scholarship|financial|aid|money|afford)\b/i,
    responses: [
      {
        text: "We believe education should be accessible to all. Here are our financial support options:",
        options: [
          "Merit scholarships",
          "Need-based grants",
          "Work-study programs",
          "Athletic scholarships",
          "How to apply for aid"
        ]
      }
    ]
  },

  // Programs and Courses
  {
    pattern: /\b(program|course|study|major|degree)\b/i,
    responses: [
      {
        text: "We offer a wide range of programs across various disciplines:",
        options: [
          "Business & Management",
          "Engineering & Technology",
          "Arts & Humanities",
          "Sciences",
          "View all programs"
        ]
      }
    ]
  },

  // Campus Life
  {
    pattern: /\b(campus|housing|dorm|accommodation|live)\b/i,
    responses: [
      {
        text: "Our campus offers a vibrant and inclusive living environment:",
        options: [
          "On-campus housing options",
          "Meal plans",
          "Campus facilities",
          "Student activities",
          "Virtual campus tour"
        ]
      }
    ]
  },

  // Career Services
  {
    pattern: /\b(career|job|employment|internship|work)\b/i,
    responses: [
      {
        text: "Our Career Services department provides comprehensive support:",
        options: [
          "Career counseling",
          "Job placement assistance",
          "Internship programs",
          "Resume workshops",
          "Employment statistics"
        ]
      }
    ]
  },

  // Follow-Up Responses for Options
  {
    pattern: /academic requirements|minimum gpa|test scores|letters of recommendation|extracurricular activities/i,
    responses: [
      {
        text: "Here are the detailed academic requirements:",
        options: [
          "• Minimum GPA: 3.0",
          "• Required test scores: SAT (1200+) or ACT (25+)",
          "• Two letters of recommendation from teachers or mentors",
          "• Participation in extracurricular activities (sports, clubs, volunteering)"
        ]
      }
    ]
  },
  {
    pattern: /application deadlines|early decision|regular decision|transfer students|international students/i,
    responses: [
      {
        text: "Here are our application deadlines:",
        options: [
          "• Early Decision: November 1",
          "• Regular Decision: January 15",
          "• Transfer Students: March 1",
          "• International Students: December 1"
        ]
      }
    ]
  },
  {
    pattern: /undergraduate fees|graduate fees|international fees|payment plans/i,
    responses: [
      {
        text: "Here's a breakdown of our fees:",
        options: [
          "• Undergraduate: $25,000/year",
          "• Graduate: $30,000/year",
          "• International fees: Additional $5,000/year",
          "• Payment plans: Monthly, quarterly, or semester-based options"
        ]
      }
    ]
  },
  {
    pattern: /merit scholarships|need-based grants|work-study programs|athletic scholarships/i,
    responses: [
      {
        text: "Here's more information about financial aid:",
        options: [
          "• Merit scholarships: Up to 100% tuition based on academic excellence",
          "• Need-based grants: Awarded based on financial need",
          "• Work-study programs: Part-time jobs on campus",
          "• Athletic scholarships: For talented athletes in various sports"
        ]
      }
    ]
  },
  {
    pattern: /business & management|engineering & technology|arts & humanities|sciences/i,
    responses: [
      {
        text: "Here's more about our programs:",
        options: [
          "• Business & Management: MBA, Finance, Marketing",
          "• Engineering & Technology: Computer Science, Mechanical Engineering",
          "• Arts & Humanities: Literature, History, Fine Arts",
          "• Sciences: Biology, Chemistry, Physics"
        ]
      }
    ]
  },
  {
    pattern: /on-campus housing|meal plans|campus facilities|student activities/i,
    responses: [
      {
        text: "Here's more about campus life:",
        options: [
          "• On-campus housing: Dormitories and apartments",
          "• Meal plans: Flexible options for all dietary needs",
          "• Campus facilities: Library, gym, labs, and more",
          "• Student activities: Clubs, sports, and events"
        ]
      }
    ]
  },
  {
    pattern: /career counseling|job placement assistance|internship programs|resume workshops/i,
    responses: [
      {
        text: "Here's more about career services:",
        options: [
          "• Career counseling: One-on-one sessions with career advisors",
          "• Job placement assistance: Help with finding jobs after graduation",
          "• Internship programs: Partnerships with top companies",
          "• Resume workshops: Learn how to create a professional resume"
        ]
      }
    ]
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages);
      setMessages(parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })));
    } else {
      // Initial welcome message
      setMessages([
        {
          id: '1',
          text: "👋 Hi! I'm your AI assistant. I'm here to help you with any questions about our university. Feel free to ask about admissions, programs, scholarships, or campus life!",
          sender: 'bot',
          timestamp: new Date(),
          options: [
            "Tell me about admissions",
            "What programs do you offer?",
            "Scholarship information",
            "Campus life"
          ]
        }
      ]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userMessage: string): { text: string; options?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Find matching pattern
    for (const pattern of responsePatterns) {
      if (pattern.pattern.test(lowerMessage)) {
        const response = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
        return response;
      }
    }
    
    // Default response if no pattern matches
    return {
      text: "I'm here to help! Here are some topics I can assist you with:",
      options: [
        "Admission process",
        "Programs & courses",
        "Tuition & fees",
        "Scholarships",
        "Campus life",
        "Career services"
      ]
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      setIsTyping(true);

      // Simulate bot thinking and typing with variable delay
      const thinkingTime = Math.random() * 1000 + 500; // Random delay between 500-1500ms
      
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse.text,
          sender: 'bot',
          timestamp: new Date(),
          options: botResponse.options
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, thinkingTime);
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
        className="fixed bottom-6 right-6 bg-rose-600 text-white p-4 rounded-full shadow-lg hover:bg-rose-700 transition-all z-50 group"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-50 transition-all transform-gpu">
          <div className="p-4 border-b bg-rose-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm text-rose-100">Always here to help</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: 'smooth' }}>
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div
                  className={`flex gap-2 ${
                    msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <Bot className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                  )}
                  <div
                    className={`${
                      msg.sender === 'bot'
                        ? 'bg-rose-50 text-gray-800'
                        : 'bg-rose-600 text-white'
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
                    <User className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                  )}
                </div>

                {msg.options && (
                  <div className="ml-7 flex flex-wrap gap-2">
                    {msg.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="text-sm bg-white border border-rose-200 text-rose-600 px-3 py-1 rounded-full hover:bg-rose-50 transition-colors"
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
                <Bot className="w-5 h-5 text-rose-600 flex-shrink-0 mt-1" />
                <div className="bg-rose-50 rounded-lg p-3 max-w-[80%] shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600"
                aria-label="Message input"
              />
              <button
                type="submit"
                className="bg-rose-600 text-white p-2 rounded-lg hover:bg-rose-700 transition-colors"
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