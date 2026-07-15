import { useNavigate, useLocation } from 'react-router-dom';
import { Gamepad2, Users, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({}: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '首页', path: '/' },
    { id: 'order', label: '老板点单', path: '/order' },
    { id: 'recruit', label: '打手招募', path: '/recruit' },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              装糖电竞
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-secondary-light'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate('/order')}
              className="flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
            >
              <Gamepad2 className="w-4 h-4" />
              立即点单
            </button>
            <button
              onClick={() => navigate('/recruit')}
              className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-medium hover:bg-primary/10 transition-all duration-200"
            >
              <Users className="w-4 h-4" />
              加入我们
            </button>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-secondary-light'
                      : 'text-text-secondary hover:bg-dark-card'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-dark-border">
                <button
                  onClick={() => {
                    navigate('/order');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-dark text-white px-5 py-3 rounded-lg font-medium"
                >
                  <Gamepad2 className="w-4 h-4" />
                  立即点单
                </button>
                <button
                  onClick={() => {
                    navigate('/recruit');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-medium"
                >
                  <Users className="w-4 h-4" />
                  加入我们
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}