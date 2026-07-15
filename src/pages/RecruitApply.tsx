import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Phone, Gamepad2, Award, FileText, Upload, Check } from 'lucide-react';
import { useState } from 'react';

export default function RecruitApply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: '',
    phone: '',
    game: '',
    rank: '',
    experience: '',
    introduction: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const games = [
    { name: '英雄联盟', ranks: ['青铜', '白银', '黄金', '铂金', '钻石', '大师', '王者'] },
    { name: 'CS:GO', ranks: ['白银', '黄金', 'AK', '全球精英'] },
    { name: '绝地求生', ranks: ['青铜', '白银', '黄金', '铂金', '钻石', '战神'] },
    { name: '王者荣耀', ranks: ['青铜', '白银', '黄金', '铂金', '钻石', '星耀', '王者'] },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nickname || !formData.phone || !formData.game || !formData.rank) {
      alert('请填写所有必填项');
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
            <h2 className="text-2xl font-bold text-text-primary mb-2">申请提交成功</h2>
            <p className="text-text-secondary mb-6">
              感谢您的申请！我们会在24小时内进行审核，
              <br />
              审核结果将通过短信通知您
            </p>
            
            <div className="bg-dark-light rounded-xl p-6 mb-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">昵称：</span>
                  <span className="text-text-primary">{formData.nickname}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">手机号：</span>
                  <span className="text-text-primary">{formData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">游戏：</span>
                  <span className="text-text-primary">{formData.game}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-text-muted" />
                  <span className="text-text-secondary">段位：</span>
                  <span className="text-text-primary">{formData.rank}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/recruit')}
                className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
              >
                返回招募页
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
            onClick={() => navigate('/recruit')}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            返回
          </button>
          <h1 className="text-2xl font-bold text-text-primary">申请成为打手</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-6">基本信息</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  昵称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  placeholder="请输入您的游戏昵称"
                  className="w-full bg-dark-light text-text-primary px-4 py-3 rounded-lg border border-dark-border focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  手机号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="请输入您的手机号"
                  className="w-full bg-dark-light text-text-primary px-4 py-3 rounded-lg border border-dark-border focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-6">游戏信息</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2 flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  游戏 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.game}
                  onChange={(e) => {
                    setFormData({ ...formData, game: e.target.value, rank: '' });
                  }}
                  className="w-full bg-dark-light text-text-primary px-4 py-3 rounded-lg border border-dark-border focus:border-primary focus:outline-none"
                >
                  <option value="">请选择游戏</option>
                  {games.map((game) => (
                    <option key={game.name} value={game.name}>
                      {game.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  段位 <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                  disabled={!formData.game}
                  className="w-full bg-dark-light text-text-primary px-4 py-3 rounded-lg border border-dark-border focus:border-primary focus:outline-none disabled:opacity-50"
                >
                  <option value="">请选择段位</option>
                  {games
                    .find((g) => g.name === formData.game)
                    ?.ranks.map((rank) => (
                      <option key={rank} value={rank}>
                        {rank}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-text-secondary mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                游戏经验
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="请描述您的游戏经验，例如：玩了几年、擅长什么位置、有没有参加过比赛等"
                rows={4}
                className="w-full bg-dark-light text-text-primary px-4 py-3 rounded-lg border border-dark-border focus:border-primary focus:outline-none resize-none"
              />
            </div>
          </div>

          <div className="bg-dark-card rounded-2xl border border-dark-border p-6">
            <h2 className="text-lg font-bold text-text-primary mb-6">个人介绍</h2>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4" />
                自我介绍
              </label>
              <textarea
                value={formData.introduction}
                onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                placeholder="请简单介绍一下自己，让老板们更好地了解你"
                rows={4}
                className="w-full bg-dark-light text-text-primary px-4 py-3 rounded-lg border border-dark-border focus:border-primary focus:outline-none resize-none"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agreed"
              className="mt-1 w-4 h-4 rounded border-dark-border text-primary focus:ring-primary"
            />
            <label htmlFor="agreed" className="text-sm text-text-secondary">
              我已阅读并同意《打手服务协议》和《隐私政策》，并承诺所填写信息真实有效
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          >
            提交申请
          </button>
        </form>
      </div>
    </div>
  );
}