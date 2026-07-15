import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Check, ChevronLeft, Calendar, Clock, User, Gamepad2, CreditCard, Shield } from 'lucide-react';
import { useState } from 'react';
import { mockPlayers } from '../services/mock/players';

export default function Booking() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const player = mockPlayers.find((p) => p.id === id);
  const { date, time, duration } = location.state as { date: string; time: string; duration: number };

  if (!player) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-text-primary mb-2">未找到该打手</h3>
          <button
            onClick={() => navigate('/order')}
            className="text-primary-light hover:text-primary transition-colors"
          >
            返回打手列表
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = player.price * duration;

  const handleSubmit = () => {
    if (!agreed) {
      alert('请同意服务协议');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card rounded-2xl border border-dark-border p-8 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">预约成功</h2>
            <p className="text-text-secondary mb-6">您的订单已提交，打手会在预约时间联系您</p>
            
            <div className="bg-dark-light rounded-xl p-6 mb-6 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-text-muted mb-1">订单编号</div>
                  <div className="text-text-primary font-medium">ORD{Date.now()}</div>
                </div>
                <div>
                  <div className="text-sm text-text-muted mb-1">订单状态</div>
                  <div className="text-green-400 font-medium">待确认</div>
                </div>
                <div>
                  <div className="text-sm text-text-muted mb-1">预约时间</div>
                  <div className="text-text-primary font-medium">{date} {time}</div>
                </div>
                <div>
                  <div className="text-sm text-text-muted mb-1">订单金额</div>
                  <div className="text-accent font-bold">{totalPrice}元</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/order')}
                className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
              >
                继续点单
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="text-2xl font-bold text-text-primary">确认订单</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary-light" />
              打手信息
            </h2>
            <div className="flex items-center gap-4">
              <img
                src={player.avatar}
                alt={player.nickname}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-text-primary">{player.nickname}</h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span>{player.game}</span>
                  <span className="text-accent">{player.rank}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-light" />
              预约信息
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-dark-border">
                <span className="text-text-secondary flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  预约日期
                </span>
                <span className="text-text-primary font-medium">{date}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-dark-border">
                <span className="text-text-secondary flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  开始时间
                </span>
                <span className="text-text-primary font-medium">{time}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-dark-border">
                <span className="text-text-secondary flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  服务时长
                </span>
                <span className="text-text-primary font-medium">{duration}小时</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-text-secondary">游戏项目</span>
                <span className="text-text-primary font-medium">{player.game}</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary-light" />
              费用明细
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">{player.nickname} ({player.price}元/小时)</span>
                <span className="text-text-primary">{totalPrice}元</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">平台服务费</span>
                <span className="text-text-primary">0元</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-dark-border">
                <span className="text-text-primary font-bold">总计</span>
                <span className="text-2xl font-bold text-accent">{totalPrice}元</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-light" />
              服务保障
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: '实名认证', desc: '100%真实身份' },
                { title: '安全支付', desc: '第三方支付保障' },
                { title: '无忧退款', desc: '不满意全额退' },
                { title: '客服支持', desc: '7x24小时在线' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-green-400 mb-2">✓</div>
                  <div className="text-sm font-medium text-text-primary">{item.title}</div>
                  <div className="text-xs text-text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agreed"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-dark-border text-primary focus:ring-primary"
            />
            <label htmlFor="agreed" className="text-sm text-text-secondary">
              我已阅读并同意《用户服务协议》和《隐私政策》
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-accent to-accent-dark text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
          >
            确认支付 {totalPrice}元
          </button>
        </div>
      </div>
    </div>
  );
}