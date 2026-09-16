export const siteConfig = {
  name: "Suhyun Choi",
  title: "Robotics Engineer | 3D Vision & Robot Perception",
  profileImage: "profile.jpg",
  description:
    "Portfolio of Suhyun Choi, focusing on robotics, 3D vision, point cloud registration, and 6D pose estimation.",
  accentColor: "#1d4ed8",

  social: {
    email: "chsuk02@hanyang.ac.kr",
    linkedin: "https://www.linkedin.com/in/suhyun-choi-264776424",
    twitter: "",
    github: "https://github.com/helloimsuhyun",
  },

  aboutMe:
    "I am a Robotics Engineering student at Hanyang University ERICA with a strong interest in 3D vision and robot perception. My research focuses on point cloud registration, 6D object pose estimation, hand–eye calibration, and geometric feature extraction for robotic applications. I enjoy building practical perception systems by combining geometric algorithms, optimization, simulation, and real robotic hardware.",

  skills: [
    "Python",
    "C++",
    "ROS 2",
    "MoveIt",
    "Open3D",
    "PCL",
    "MuJoCo",
    "3D Computer Vision",
    "Point Cloud Registration",
    "6D Pose Estimation",
    "Hand–Eye Calibration",
    "Robot Perception",
  ],

  projects: [
    {
      name: "Eye-in-Hand Laser Sensor Calibration",
      description:
        "Developed a hand–eye calibration system for an RB5 collaborative robot equipped with a Keyence laser profile sensor. Designed calibration poses and evaluated calibration accuracy using both real-world experiments and simulation.",
      link: "",
      skills: [
        "Python",
        "Robotics",
        "Hand–Eye Calibration",
        "Optimization",
        "3D Geometry",
      ],
    },

    {
      name: "Indoor Security Patrol Robot System",
      description:
        "Developed an autonomous patrol robot system for physical security and inspection of unmanned data centers. The project received the Grand Prize in the 2026 Capstone Design competition.",
      link: "",
      skills: [
        "ROS 2",
        "Autonomous Robotics",
        "Robot Perception",
        "System Integration",
      ],
    },

    {
      name: "CAD-Guided 6D Pose Estimation",
      description:
        "Researching geometry-aware 6D object pose estimation from sparse and partial point clouds using CAD models, local geometric features, point cloud registration, and active sensing.",
      link: "",
      skills: [
        "Point Cloud Registration",
        "6D Pose Estimation",
        "PCL",
        "Open3D",
        "3D Geometry",
      ],
    },

    {
      name: "Robust 3D Keypoint Detection",
      description:
        "Investigating robust surface normal estimation and Harris3D-based keypoint detection for CAD models and partial point clouds, with a focus on repeatability under sampling, noise, and partial observations.",
      link: "",
      skills: [
        "Harris3D",
        "Point Clouds",
        "Normal Estimation",
        "PCL",
        "Python",
      ],
    },
  ],

  experience: [
    {
      company: "Hanyang University ERICA",
      title: "Undergraduate Researcher — Robotics & 3D Vision",
      dateRange: "2026 - Present",
      bullets: [
        "Researching point cloud registration, 6D pose estimation, and geometric feature detection",
        "Developed hand–eye calibration methods for an eye-in-hand laser profile sensor",
        "Implemented and evaluated 3D perception algorithms using PCL, Open3D, and simulation environments",
      ],
    },

    {
      company: "Korea Electrotechnology Research Institute (KERI)",
      title: "Research Intern",
      dateRange: "2026",
      bullets: [
        "Conducted research on RGB-based physiological signal estimation using hyperspectral and RGB imaging",
        "Developed data processing and experimental pipelines for non-contact SpO2 estimation",
        "Contributed to research manuscript preparation as first author",
      ],
    },
  ],

  education: [
    {
      school: "Hanyang University ERICA",
      degree: "B.S. in Robotics Engineering",
      dateRange: "Undergraduate",
      achievements: [
        "Grand Prize, 2026 Capstone Design Competition",
        "Undergraduate Paper Award, ICROS 2026",
        "Research interests: 3D vision, point cloud registration, and 6D pose estimation",
      ],
    },
  ],
};