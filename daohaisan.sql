https://github.com/nhatvy1/haisan.git
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2023 at 04:49 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daohaisan`
--

-- --------------------------------------------------------

--
-- Table structure for table `Addresses`
--

CREATE TABLE `Addresses` (
  `id` int(11) NOT NULL,
  `province` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Banners`
--

CREATE TABLE `Banners` (
  `id` int(11) NOT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `subheader` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`id`, `code`, `value`, `header`, `subheader`, `createdAt`, `updatedAt`) VALUES
(1, '001', 'Cá hồi', NULL, NULL, '2023-08-25 18:16:29', '2023-08-25 18:16:29'),
(2, '002', 'Ngao, Sò, Ốc', NULL, NULL, '2023-08-25 18:16:49', '2023-08-25 18:16:49'),
(3, '003', 'Cua - Ghẹ', NULL, NULL, '2023-08-25 18:16:49', '2023-08-25 18:16:49');

-- --------------------------------------------------------

--
-- Table structure for table `OrderDetails`
--

CREATE TABLE `OrderDetails` (
  `id` int(11) NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unitPrice` float DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderDetails`
--

INSERT INTO `OrderDetails` (`id`, `productName`, `quantity`, `unitPrice`, `productId`, `orderId`, `createdAt`, `updatedAt`) VALUES
(1, 'Cá hồi phile', 2, 40000, 1, 1, '2023-09-04 16:29:01', '2023-09-04 16:29:01'),
(2, 'Trứng cá hồi', 1, 3000, 2, 1, '2023-09-04 16:29:01', '2023-09-04 16:29:01'),
(3, 'Cá hồi tươi', 1, 2000, 3, 2, '2023-09-04 16:32:07', '2023-09-04 16:32:07'),
(4, 'Bào ngư Hàn Quốc sống', 1, 1000, 6, 2, '2023-09-04 16:32:07', '2023-09-04 16:32:07'),
(5, 'Thanh cua Surimi', 2, 8000, 15, 3, '2023-09-04 16:45:34', '2023-09-04 16:45:34'),
(6, 'Chả cua', 3, 36000, 14, 4, '2023-09-04 17:12:11', '2023-09-04 17:12:11'),
(7, 'Cá hồi phile', 4, 80000, 1, 5, '2023-09-14 04:45:02', '2023-09-14 04:45:02'),
(8, 'Đuôi cá hồi', 2, 60000, 5, 5, '2023-09-14 04:45:02', '2023-09-14 04:45:02'),
(9, 'Cá hồi phile', 1, 20000, 1, 6, '2023-09-15 02:23:02', '2023-09-15 02:23:02'),
(10, 'Trứng cá hồi', 1, 3000, 2, 6, '2023-09-15 02:23:02', '2023-09-15 02:23:02');

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `shipAddress` varchar(255) DEFAULT NULL,
  `attribute` int(11) DEFAULT NULL,
  `paymentId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `status`, `shipAddress`, `attribute`, `paymentId`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Đã đặt hàng', 'Sài Gòn', 1, NULL, 1, '2023-09-04 16:29:01', '2023-09-04 16:29:01'),
(2, 'Đã đặt hàng', 'Sài Gòn', 1, NULL, 1, '2023-09-04 16:32:07', '2023-09-04 16:32:07'),
(3, 'Đã đặt hàng', 'Sài Gòn', 1, NULL, 1, '2023-09-04 16:45:34', '2023-09-04 16:45:34'),
(4, 'Đã đặt hàng', 'Sài Gòn', 1, NULL, 1, '2023-09-04 17:12:11', '2023-09-04 17:12:11'),
(5, 'Đã đặt hàng', 'Sài Gòn', 1, NULL, 6, '2023-09-14 04:45:02', '2023-09-14 04:45:02'),
(6, 'Đã đặt hàng', 'Sài Gòn', 1, NULL, 3, '2023-09-15 02:23:02', '2023-09-15 02:23:02');

-- --------------------------------------------------------

--
-- Table structure for table `Payments`
--

CREATE TABLE `Payments` (
  `id` int(11) NOT NULL,
  `paymentType` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `accountNo` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Payments`
--

INSERT INTO `Payments` (`id`, `paymentType`, `provider`, `accountNo`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Ví điện tử', 'Momo', '0332650824', 1, '2023-09-04 12:24:08', '2023-09-04 12:24:08'),
(2, 'Ngân hàng', 'BIDV', '62210000265228', 1, '2023-09-04 12:24:46', '2023-09-04 12:24:46');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `giftContent` text DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `price`, `discount`, `unit`, `description`, `images`, `status`, `quantity`, `giftContent`, `slug`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Cá hồi phile', 20000, 15000, 'Khay 200gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979547/latcahoi_ihvcb0.png', 1, 100, 'Mua 1 tặng 1', NULL, 1, '2023-08-25 18:17:29', '2023-08-25 18:17:29'),
(2, 'Trứng cá hồi', 3000, 15000, 'Hủ 50g', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979958/trungca_wxkiyt.webp', 1, 100, 'Mua 1 tặng 1', NULL, 1, '2023-08-25 18:18:32', '2023-08-25 18:18:32'),
(3, 'Cá hồi tươi', 2000, 15000, '1kg', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979847/tuoi_owzole.jpg', 1, 100, 'Mua 1 tặng 1', NULL, 1, '2023-08-25 18:20:57', '2023-08-25 18:20:57'),
(4, 'Sashimi cá hồi', 2000, 15000, 'Phần', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979550/cachich_ugbylo.png', 1, 100, 'Mua 1 tặng 1', NULL, 1, '2023-08-25 18:21:59', '2023-08-25 18:21:59'),
(5, 'Đuôi cá hồi', 30000, 25000, 'Khay 200gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979547/cahoi_r4pas7.png', 1, 20, 'Mua 1 tặng 1', NULL, 1, '2023-08-25 18:23:37', '2023-08-25 18:23:37'),
(6, 'Bào ngư Hàn Quốc sống', 1000, 5000, 'Con', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979546/hau_xaxmno.png', 1, 10, 'Mua 1 tặng 1', NULL, 2, '2023-08-25 18:34:37', '2023-08-25 18:34:37'),
(7, 'Ốc hương sống', 6000, 4000, '500gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979546/ochuong_codjbi.png', 1, 30, 'Mua 1 tặng 1', NULL, 2, '2023-08-25 18:35:42', '2023-08-25 18:35:42'),
(8, 'Bào ngư Úc đông lạnh', 5000, 3000, '500gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979546/hau_xaxmno.png', 1, 30, 'Mua 1 tặng 1', NULL, 2, '2023-08-25 18:36:35', '2023-08-25 18:36:35'),
(9, 'Hàu sữa', 8000, 6000, 'Túi 1kg', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979545/hausua_ezu2lf.png', NULL, NULL, 'Mua 1 tặng 1', NULL, 2, '2023-08-25 18:37:30', '2023-08-25 18:37:30'),
(10, 'Sò huyết cồ', 7000, 3000, '500gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692981537/sohuyet_y4l04a.jpg', 1, 20, 'Mua 1 tặng 1', NULL, 2, '2023-08-25 18:39:02', '2023-08-25 18:39:02'),
(11, 'Cua hoàng đế - King Crab sống', 8000, 6000, '1kg', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979547/cuahuynhde1_eebd1s.png', 1, 20, 'Mua 1 tặng 1', NULL, 3, '2023-08-25 18:41:20', '2023-08-25 18:41:20'),
(12, 'Chân cua tuyết', 10000, 6000, 'Túi 500gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692981537/sohuyet_y4l04a.jpg', 1, 10, 'Mua 1 tặng 1', NULL, 3, '2023-08-25 18:42:24', '2023-08-25 18:42:24'),
(13, 'Cua cà mau', 14000, 11500, 'Con 350gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979547/cuacamau_f4ulnv.png', 1, 20, 'Mua 1 tặng 1', NULL, 3, '2023-08-25 18:43:59', '2023-08-25 18:43:59'),
(14, 'Chả cua', 12000, 11500, 'Khay 240gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692979547/chacua_grix5g.png', 1, 10, 'Mua 1 tặng 1', NULL, 3, '2023-08-25 18:45:05', '2023-08-25 18:45:05'),
(15, 'Thanh cua Surimi', 4000, 3000, '200gr', 'Thơm ngon', 'https://res.cloudinary.com/metavere/image/upload/v1692981996/thanhcua_jbqrdi.webp', 1, 20, 'Mua 1 tặng 1', NULL, 3, '2023-08-25 18:46:42', '2023-08-25 18:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `Rates`
--

CREATE TABLE `Rates` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `like` int(11) DEFAULT NULL,
  `dislike` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2023-08-25 18:16:00', '2023-08-25 18:16:00'),
(2, 'employee', '2023-08-25 18:16:04', '2023-08-25 18:16:04'),
(3, 'user', '2023-08-25 18:16:12', '2023-08-25 18:16:12');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20230601080400-create-role.js'),
('20230601080401-create-user.js'),
('20230601080403-create-category.js'),
('20230601080404-create-product.js'),
('20230601080405-create-payment.js'),
('20230601080406-create-order.js'),
('20230601080407-create-order-detail.js'),
('20230601080408-create-address.js'),
('20230601080409-create-banner.js'),
('20230601080410-create-rate.js'),
('20230601080411-create-slogan.js');

-- --------------------------------------------------------

--
-- Table structure for table `Slogans`
--

CREATE TABLE `Slogans` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `firstName`, `lastName`, `username`, `password`, `status`, `avatar`, `phone`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 'Nhật', 'Vỹ', 'nhatvy', '$2a$12$ofPzg76/kyAFDiYyINXouuGwq4IzcM4DSzf2uQo8YJIwOKQfpRBsO', 1, '', '0332650824', 3, '2023-09-04 10:19:11', '2023-09-04 10:19:11'),
(3, 'Thùy', 'Duyên', 'duyen', '$2a$12$wrjcEmkKlROvro5gveQWm.nZI/02yV7IAJ0UDR.n9TZuGCbLFmC1K', 1, '', '033', 3, '2023-09-12 07:52:23', '2023-09-12 07:52:23'),
(4, 'Demo', 'Test', 'test1', '$2a$12$ceHXkQJv4Q4rkoH7V4GWLeowqhT/cIDbA/6ZBQcxgwC2Bs9SvA6rS', 1, '', '033', 3, '2023-09-12 07:59:23', '2023-09-12 07:59:23'),
(5, 'Demo', 'Test', 'test2', '$2a$12$57JztioG2Mf5Aw3gf9ybY.xWb3ykfC5Jo1VXaJ1o1LFwUnC2c5fWK', 1, '', '033', 3, '2023-09-12 08:02:14', '2023-09-12 08:02:14'),
(6, 'Demo', 'Test', 'admin', '$2a$12$yChhEKWU9Di4hOsuW7Idru3ZVbCq9QcAhER4rk/RGfMf0HpazXRFS', 1, '', '033', 1, '2023-09-12 08:28:15', '2023-09-12 08:28:15'),
(7, 'Demo', 'Test', 'test3', '$2a$12$JIItaeaI5XakhXdO58M/9e8IHxv9SRoDjLz3bbxTt1x8d.vJmRuPe', 1, '', '033', 3, '2023-09-12 08:37:15', '2023-09-12 08:37:15'),
(8, 'Demo', 'Test', 'test4', '$2a$12$yPJxsents/GH9Mk6IYx5Q.Sq209Q1/b/tnYtniPVRokmNMUcksMrm', 1, '', '033', 3, '2023-09-12 08:37:19', '2023-09-12 08:37:19'),
(9, 'Demo', 'Test', 'test5', '$2a$12$zXjW5wqYyYOwEMbIzkgGCOoDPTz5YOUdW.DgsTta6MRxeuGi7w.Ri', 1, '', '033', 3, '2023-09-12 08:37:27', '2023-09-12 08:37:27'),
(10, 'Demo', 'Test', 'test6', '$2a$12$kV77/a0PEPwFOQvRV/Vp8.P8GxA5KVIMO0TntXK4/VDuUNitxfIZK', 1, '', '033', 3, '2023-09-12 08:37:30', '2023-09-12 08:37:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Addresses`
--
ALTER TABLE `Addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Banners`
--
ALTER TABLE `Banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `OrderDetails`
--
ALTER TABLE `OrderDetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `orderId` (`orderId`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paymentId` (`paymentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Payments`
--
ALTER TABLE `Payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `Rates`
--
ALTER TABLE `Rates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Slogans`
--
ALTER TABLE `Slogans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Addresses`
--
ALTER TABLE `Addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Banners`
--
ALTER TABLE `Banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `OrderDetails`
--
ALTER TABLE `OrderDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Payments`
--
ALTER TABLE `Payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `Rates`
--
ALTER TABLE `Rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Slogans`
--
ALTER TABLE `Slogans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Addresses`
--
ALTER TABLE `Addresses`
  ADD CONSTRAINT `Addresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Constraints for table `OrderDetails`
--
ALTER TABLE `OrderDetails`
  ADD CONSTRAINT `OrderDetails_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `Products` (`id`),
  ADD CONSTRAINT `OrderDetails_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `Orders` (`id`);

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`paymentId`) REFERENCES `Payments` (`id`),
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Constraints for table `Payments`
--
ALTER TABLE `Payments`
  ADD CONSTRAINT `Payments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`);

--
-- Constraints for table `Rates`
--
ALTER TABLE `Rates`
  ADD CONSTRAINT `Rates_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `Products` (`id`),
  ADD CONSTRAINT `Rates_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
