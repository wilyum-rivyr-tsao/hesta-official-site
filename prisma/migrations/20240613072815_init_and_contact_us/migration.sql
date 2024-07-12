-- CreateTable
CREATE TABLE `Contact_us` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,

    UNIQUE INDEX `Contact_us_email_key`(`email`),
    UNIQUE INDEX `Contact_us_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
