CREATE TABLE `votes` (`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL, `voter_id` text NOT NULL, `choice` text NOT NULL, `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_votes_voter_id` ON `votes` (`voter_id`);
--> statement-breakpoint
CREATE INDEX `idx_votes_choice` ON `votes` (`choice`);
--> statement-breakpoint
CREATE TABLE `comments` (`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL, `name` text NOT NULL, `message` text NOT NULL, `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL);
--> statement-breakpoint
CREATE INDEX `idx_comments_created_at` ON `comments` (`created_at`);
