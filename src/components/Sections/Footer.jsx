import { useRef } from "react";
import {
    motion,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";

import {
    Mail,
    Heart,
    ArrowUp,
    Code2,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import {
    FiGithub,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

import {
    containerVariants,
    itemVariants,
} from "../../utils/helper";

const Footer = () => {
    const { isDarkMode } = useTheme();

    const footerRef = useRef(null);

    const isInView = useInView(footerRef, {
        once: true,
        margin: "-50px",
    });

    const { scrollYProgress } = useScroll();

    const scrollY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -50]
    );

    const socialLinks = [
        {
            name: "GitHub",
            icon: FiGithub,
            url: "https://github.com/NI8hawk-Gokul",
            color: "hover:text-gray-400",
        },
        {
            name: "LinkedIn",
            icon: FiLinkedin,
            url: "https://www.linkedin.com/in/gokul-k-344656300/",
            color: "hover:text-blue-400",
        },
        {
            name: "X",
            icon: FiTwitter,
            url: "https://x.com/Gokul44637839",
            color: "hover:text-sky-400",
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:gokulk.ai.official@gmail.com",
            color: "hover:text-red-400",
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const AnimatedGradientLine = () => (
        <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
            <motion.div
                className={`h-px bg-gradient-to-r ${
                    isDarkMode
                        ? "from-transparent via-blue-500 to-transparent"
                        : "from-transparent via-blue-600 to-transparent"
                }`}
                initial={{
                    width: "0%",
                    opacity: 0,
                }}
                animate={
                    isInView
                        ? {
                              width: "100%",
                              opacity: 1,
                          }
                        : {}
                }
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className={`absolute top-0 h-px w-32 bg-gradient-to-r ${
                    isDarkMode
                        ? "from-blue-400 via-purple-500 to-blue-400"
                        : "from-blue-500 via-purple-600 to-blue-500"
                } blur-sm`}
                animate={{
                    x: ["-500%", "calc(100vw + 50%)"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 6,
                        ease: "linear",
                        delay: 1,
                    },
                }}
            />
        </div>
    );

    return (
        <footer
            ref={footerRef}
            className={`relative overflow-hidden ${
                isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            {/* Animated Top Border */}
            <AnimatedGradientLine />

            {/* Background Blur Effects */}
            <motion.div
                style={{ y: scrollY }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <div
                    className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
                        isDarkMode
                            ? "bg-blue-500"
                            : "bg-blue-400"
                    }`}
                />

                <div
                    className={`absolute top-10 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-5 ${
                        isDarkMode
                            ? "bg-purple-500"
                            : "bg-purple-400"
                    }`}
                />
            </motion.div>

            <div className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial="hidden"
                        animate={
                            isInView
                                ? "visible"
                                : "hidden"
                        }
                        variants={containerVariants}
                        className="text-center space-y-8"
                    >
                        {/* Logo / Branding */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <motion.div
                                className="inline-flex items-center space-x-3 text-3xl font-semibold"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="text-blue-500"
                                >
                                    <Code2 size={30} />
                                </motion.div>

                                <span>
                                    K Gokul
                                </span>
                            </motion.div>

                            <motion.p
                                variants={itemVariants}
                                className={`text-sm max-w-md mx-auto leading-relaxed ${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                            >
                                Crafting digital
                                experiences with
                                passion, precision,
                                and creativity.
                            </motion.p>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center flex-wrap gap-5"
                        >
                            {socialLinks.map(
                                (
                                    social,
                                    index
                                ) => (
                                    <motion.a
                                        key={
                                            social.name
                                        }
                                        href={
                                            social.url
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                                            isDarkMode
                                                ? "bg-gray-800/50 hover:bg-gray-700/50"
                                                : "bg-gray-100/70 hover:bg-gray-200/70"
                                        } ${
                                            social.color
                                        }`}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -4,
                                            rotate: [
                                                0,
                                                -5,
                                                5,
                                                0,
                                            ],
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        animate={
                                            isInView
                                                ? {
                                                      opacity: 1,
                                                      y: 0,
                                                  }
                                                : {}
                                        }
                                        transition={{
                                            delay:
                                                index *
                                                    0.1 +
                                                0.4,
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <social.icon
                                            size={
                                                20
                                            }
                                        />
                                    </motion.a>
                                )
                            )}
                        </motion.div>

                        {/* Divider */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center justify-center space-x-4"
                        >
                            <div
                                className={`h-px w-16 ${
                                    isDarkMode
                                        ? "bg-gray-700"
                                        : "bg-gray-300"
                                }`}
                            />

                            <motion.div
                                animate={{
                                    scale: [
                                        1,
                                        1.2,
                                        1,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="text-red-500"
                            >
                                <Heart
                                    size={16}
                                    fill="currentColor"
                                />
                            </motion.div>

                            <div
                                className={`h-px w-16 ${
                                    isDarkMode
                                        ? "bg-gray-700"
                                        : "bg-gray-300"
                                }`}
                            />
                        </motion.div>

                        {/* Copyright */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-500"
                                        : "text-gray-600"
                                }`}
                            >
                                ©{" "}
                                {new Date().getFullYear()}{" "}
                                K Gokul. All
                                rights reserved.
                            </p>

                            <p
                                className={`text-sm ${
                                    isDarkMode
                                        ? "text-gray-600"
                                        : "text-gray-500"
                                }`}
                            >
                                Built with React &
                                Framer Motion.
                                Designed with care.
                            </p>
                        </motion.div>

                        {/* Scroll To Top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{
                                y: -4,
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className={`mx-auto flex items-center space-x-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                                isDarkMode
                                    ? "border-gray-700 bg-gray-800/40 hover:border-blue-500 hover:text-blue-400"
                                    : "border-gray-300 bg-white hover:border-blue-500 hover:text-blue-600"
                            }`}
                        >
                            <ArrowUp size={18} />
                            <span className="text-sm font-medium">
                                Back to Top
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;