import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, Gamepad2, Star } from 'lucide-react';
import { mockOrders } from '../services/mock/players';

export default function OrderHistory() {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/10 text-green-400';
      case 'completed':
        return 'bg-blue-500/10 text-blue-400';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'cancelled':
        return 'bg-red-500/10 text-red-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '待开始';
      case 'completed':
        return '已完成';
      case 'pending':
        return '待确认';
      case 'cancelled':
        return '已取消';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/order')}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="text-2xl font-bold text-text-primary">订单记录</h1>
        </div>

        <div className="flex gap-4 mb-8">
          {['全部', '待开始', '进行中', '已完成'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                tab === '全部'
                  ? 'bg-primary text-white'
                  : 'bg-dark-card text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="bg-dark-card rounded-xl border border-dark-border overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-text-muted">订单编号：{order.id}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={order.playerAvatar}
                    alt={order.playerName}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-text-primary">{order.playerName}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-text-secondary">4.9</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Gamepad2 className="w-4 h-4" />
                        {order.game}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {order.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {order.time}
                      </span>
                      <span>{order.duration}小时</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-accent">{order.totalPrice}元</div>
                    <div className="text-sm text-text-muted">已支付</div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-4 border-t border-dark-border">
                  <button className="text-text-secondary hover:text-text-primary transition-colors">
                    联系打手
                  </button>
                  {order.status === 'completed' && (
                    <button className="border-2 border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                      评价
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {mockOrders.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-text-primary mb-2">暂无订单记录</h3>
              <button
                onClick={() => navigate('/order')}
                className="text-primary-light hover:text-primary transition-colors"
              >
                去点单
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}