import { FaMedal } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { TbYoga } from "react-icons/tb";
import { FaWeightHanging } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <FaDumbbell />,
    title: "Strength Training",
    info: "Build muscle and increase your strength with our comprehensive strength training program.",
    path: "/programs/strength-training",
  },
  {
    id: 2,
    icon: <GiRunningShoe />,
    title: "Cardio Boost",
    info: "Get your heart rate up and burn calories with our high-intensity cardio workout program.",
    path: "/programs/cardio-boost",
  },
  {
    id: 3,
    icon: <TbYoga />,
    title: "Yoga and Relaxation",
    info: "Find balance, flexibility, and inner peace through our yoga and relaxation program.",
    path: "/programs/yoga-relaxation",
  },
  {
    id: 4,
    icon: <FaWeightHanging />,
    title: "Weight Loss Challenge",
    info: "Achieve your weight loss goals with our structured weight loss challenge program.",
    path: "/programs/weight-loss-challenge",
  },
];

export const values = [
  {
    id: 1,
    icon: <FaMedal />,
    title: "Commitment to Excellence",
    desc: "We are committed to helping you achieve your fitness goals with dedication and excellence.",
  },
  {
    id: 2,
    icon: <FaHeart />,
    title: "Health and Wellness Priority",
    desc: "Your health and wellness are our top priorities, and we provide the tools to support them.",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    title: "Expert Guidance",
    desc: "Our experienced trainers offer expert guidance to ensure your fitness success.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Community Support",
    desc: "Join our fitness community for encouragement and support on your fitness journey.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise for optimal fitness?",
    answer:
      "The frequency of your workouts depends on your fitness goals and current fitness level. Generally, aim for at least 3-5 days of exercise per week for a balanced fitness routine.",
  },
  {
    id: 2,
    question: "Is there a best time of day to work out for maximum results?",
    answer:
      "The ideal time to work out varies from person to person. Some people prefer mornings for an energy boost, while others perform better in the evenings. It's more important to find a time that suits your schedule and allows for consistency.",
  },
  {
    id: 3,
    question: "What is the optimal workout duration for effective training?",
    answer:
      "The duration of your workouts depends on the type of exercise and your fitness level. On average, aim for 30-60 minutes of moderate to intense exercise per session. Quality and consistency matter more than duration.",
  },
  {
    id: 4,
    question: "Why is warming up essential before a workout?",
    answer:
      "Warming up is crucial to prepare your body for exercise. It increases blood flow to muscles, improves flexibility, and reduces the risk of injury. Spend 5-10 minutes on dynamic stretching or low-intensity cardio to warm up.",
  },
  {
    id: 5,
    question:
      "What's the best approach: Strength training, cardio, or a combination of both?",
    answer:
      "A balanced fitness routine often includes both strength training and cardio. Strength training builds muscle, while cardio improves cardiovascular health. Combining them offers a comprehensive fitness approach. Consult a fitness professional to tailor it to your goals.",
  },
  {
    id: 6,
    question: "Is lifting weights important for strength training?",
    answer:
      "Yes, lifting weights or resistance training is a key component of strength training. It helps build muscle mass, increase strength, and boost metabolism. Incorporate weightlifting exercises into your routine for optimal results.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    quote:
      "The fitness program has been a game-changer for me. I've lost weight, gained strength, and feel more energetic than ever before. Highly recommended!",
    job: "Personal Trainer",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "John Smith",
    quote:
      "As a software engineer, I spend long hours at a desk. This fitness regimen has not only improved my physical health but also my mental clarity. It's a holistic transformation.",
    job: "Software Engineer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Emily Davis",
    quote:
      "Teaching can be demanding, but regular exercise has been my secret weapon for stress relief and overall well-being. I've never felt better!",
    job: "Teacher",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Michael Brown",
    quote:
      "As an accountant, my job involves a lot of sitting. This fitness program has helped me maintain a healthy lifestyle and keep my energy levels up. It's made a significant difference.",
    job: "Accountant",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Rachel Miller",
    quote:
      "Being a marketing manager means constant deadlines and stress. Thanks to this program, I've managed stress better, and my productivity has soared. It's been a game-changer in my professional life.",
    job: "Marketing Manager",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Fitness Starter",
    desc: "Begin your fitness journey with expert guidance and support.",
    price: 29.99,
    features: [
      { feature: "Personal Trainer Assistance", available: true },
      { feature: "Customized Workout Plans", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Access to Fitness Classes", available: true },
      { feature: "Progress Tracking", available: true },
      { feature: "24/7 Support", available: false },
      { feature: "Online Community Access", available: false },
      { feature: "Home Workout Videos", available: false },
      { feature: "Monthly Fitness Challenges", available: false },
      { feature: "Nutrition Recipes", available: false },
      { feature: "Fitness Workshops", available: false },
      { feature: "Exclusive Fitness Merchandise", available: false },
    ],
  },
  {
    id: 2,
    name: "Fitness Enthusiast",
    desc: "Take your fitness knowledge to the next level and achieve your goals.",
    price: 49.99,
    features: [
      { feature: "Personal Trainer Assistance", available: true },
      { feature: "Customized Workout Plans", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Access to Fitness Classes", available: true },
      { feature: "Progress Tracking", available: true },
      { feature: "24/7 Support", available: true },
      { feature: "Online Community Access", available: true },
      { feature: "Home Workout Videos", available: true },
      { feature: "Monthly Fitness Challenges", available: false },
      { feature: "Nutrition Recipes", available: false },
      { feature: "Fitness Workshops", available: false },
      { feature: "Exclusive Fitness Merchandise", available: false },
    ],
  },
  {
    id: 3,
    name: "Ultimate Fitness Pro",
    desc: "Get the full fitness experience with personalized home service.",
    price: 89.99,
    features: [
      { feature: "Personal Trainer Assistance", available: true },
      { feature: "Customized Workout Plans", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Access to Fitness Classes", available: true },
      { feature: "Progress Tracking", available: true },
      { feature: "24/7 Support", available: true },
      { feature: "Online Community Access", available: true },
      { feature: "Home Workout Videos", available: true },
      { feature: "Monthly Fitness Challenges", available: true },
      { feature: "Nutrition Recipes", available: true },
      { feature: "Fitness Workshops", available: true },
      { feature: "Exclusive Fitness Merchandise", available: true },
    ],
  },
];

const Trainer1 = require("./images/trainer1.jpg");
const Trainer2 = require("./images/trainer2.jpg");
const Trainer3 = require("./images/trainer3.jpg");
const Trainer4 = require("./images/trainer4.jpg");
const Trainer5 = require("./images/trainer5.jpg");
const Trainer6 = require("./images/trainer6.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
