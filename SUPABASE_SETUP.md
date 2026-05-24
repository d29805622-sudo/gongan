# Supabase 设置指南

## 1. 创建 Supabase 项目

1. 访问 https://supabase.com/ 并注册账号
2. 创建新项目
3. 设置项目名称和数据库密码（请妥善保管）

## 2. 创建数据库表

在 Supabase SQL Editor 中执行以下 SQL：

```sql
-- 创建 police_data 表
CREATE TABLE IF NOT EXISTS police_data (
    id SERIAL PRIMARY KEY,
    data JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_police_data_updated_at ON police_data(updated_at DESC);

-- 启用行级安全（可选，根据您的安全需求设置）
ALTER TABLE police_data ENABLE ROW LEVEL SECURITY;

-- 注意：如果需要设置 RLS 策略，请根据您的需求配置
```

## 3. 获取 API 凭证

1. 在 Supabase 项目中，进入 **Settings** → **API**
2. 复制以下信息：
   - **Project URL**: 类似 `https://xxx.supabase.co`
   - **anon public** API key (用于前端访问)

## 4. 配置项目

更新 `index.html` 中的配置：

```javascript
const SUPABASE_URL = '您的项目URL';
const SUPABASE_ANON_KEY = '您的anon public key';
```

## 5. 安全建议

1. **不要提交真实的 API 密钥到 Git 仓库**
2. 生产环境建议使用环境变量或安全的配置管理方式
3. 根据需要配置 RLS (Row Level Security) 策略
4. 定期备份数据库

## 6. 测试

1. 打开 index.html
2. 检查浏览器控制台是否有 "Supabase客户端初始化成功" 的日志
3. 使用默认账号登录（admin/123456）
4. 进行一些操作，验证数据是否能正确保存和加载

## 故障排除

- 如果 Supabase 不可用，系统会自动回退到本地存储模式
- 检查浏览器控制台的错误信息
- 确保网络可以访问 Supabase 服务
