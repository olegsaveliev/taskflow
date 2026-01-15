-- TaskFlow Seed Data
-- Run this file to insert sample data for development

-- Test user (password: password123)
-- Hash generated with bcrypt, 10 rounds
INSERT INTO users (email, password_hash, name) VALUES
('demo@taskflow.com', '$2b$10$V42oUx7S.Q8jxxFOl521VOOxqTNhzmtFTdToOdKoZxAbSQoCctGY2', 'Demo User');

-- Sample tasks for user id=1
INSERT INTO tasks (user_id, title, description, status, priority, due_date) VALUES
(1, 'Complete project documentation', 'Write comprehensive docs for the TaskFlow project including API reference and user guide', 'pending', 'high', CURRENT_DATE + INTERVAL '7 days'),
(1, 'Review pull requests', 'Check and merge pending PRs from team members', 'pending', 'medium', CURRENT_DATE + INTERVAL '1 day'),
(1, 'Set up CI/CD pipeline', 'Configure GitHub Actions for automated testing and deployment', 'completed', 'high', CURRENT_DATE - INTERVAL '4 days'),
(1, 'Design database schema', 'Create ERD and table definitions for TaskFlow', 'completed', 'high', CURRENT_DATE - INTERVAL '6 days'),
(1, 'Team meeting preparation', 'Prepare slides and agenda for weekly standup meeting', 'pending', 'low', NULL),
(1, 'Fix login bug', 'Users reporting issues with password reset flow', 'pending', 'high', CURRENT_DATE + INTERVAL '2 days'),
(1, 'Update dependencies', 'Run npm audit and update vulnerable packages', 'completed', 'low', CURRENT_DATE - INTERVAL '1 day');

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'Seed data inserted successfully!';
    RAISE NOTICE 'Demo user: demo@taskflow.com / password123';
END $$;
