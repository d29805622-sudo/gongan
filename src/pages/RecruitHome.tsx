import { useNavigate } from 'react-router-dom';
import { Users, Star, Clock, Trophy, ArrowRight, CheckCircle } from 'lucide-react';

export default function RecruitHome() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Trophy,
      title: '高收入',
      description: '时薪30-200元，收入上不封顶',
    },
    {
      icon: Clock,
      title: '自由时间',
      description: '灵活安排工作时间，想玩就玩',
    },
    {
      icon: Star,
      title: '轻松上手',
      description: '简单培训即可上岗，快速赚钱',
    },
    {
      icon: Users,
      title: '结交好友',
      description: '认识更多游戏爱好者',
    },
  ];

  const requirements = [
    '年满18周岁，实名认证',
    '游戏技术过硬，有一定段位',
    '普通话标准，沟通能力强',
    '有责任心，服务态度好',
    '每天至少2小时在线时间',
  ];

  const steps = [
    { step: '01', title: '填写申请表', desc: '提交基本信息和游戏资料' },
    { step: '02', title: '技术审核', desc: '通过游戏技术测试' },
    { step: '03', title: '培训上岗', desc: '完成平台规则培训' },
    { step: '04', title: '开始接单', desc: '成为正式打手开始接单' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-light to-dark">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=600&fit=crop"
          alt="电竞招募"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              打手招募
            </h1>
            <p className="text-text-secondary">加入我们，用游戏技术赚取收入</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              成为打手，
              <br />
              <span className="text-primary-light">开启你的电竞之旅</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              无论你是LOL王者、CSGO大神还是吃鸡高手，只要你热爱游戏、技术过硬，
              都可以加入我们，用你的游戏实力赚取丰厚收入！
            </p>
            <button
              onClick={() => navigate('/recruit/apply')}
              className="group flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              立即申请
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-dark-card rounded-xl p-6 border border-dark-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">招募要求</h2>
            <p className="text-text-secondary">成为一名合格的打手，需要满足以下条件</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-dark-card/50 backdrop-blur-sm rounded-xl p-6 border border-dark-border"
              >
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-text-primary">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">申请流程</h2>
            <p className="text-text-secondary">简单四步，快速成为正式打手</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-dark-card rounded-xl p-6 border border-dark-border text-center">
                  <div className="text-4xl font-bold text-primary-light mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-dark-border -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                还在犹豫什么？
                <br />
                快来加入我们吧！
              </h2>
              <p className="text-text-secondary mb-6">
                平台已有超过1000名打手，月均收入超过3000元，
                优秀打手月入过万不是梦！
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-light">1000+</div>
                  <div className="text-sm text-text-muted">平台打手</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">3000+</div>
                  <div className="text-sm text-text-muted">月均收入(元)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50万+</div>
                  <div className="text-sm text-text-muted">完成订单</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => navigate('/recruit/apply')}
                className="bg-gradient-to-r from-accent to-accent-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
              >
                立即申请加入
              </button>
              <p className="text-sm text-text-muted mt-4">申请完全免费，审核通过即可上岗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}