/* =========================================================
   PolyU VCLab — shared publications & team data
   Loaded BEFORE main.js / collection.js
   ========================================================= */

window.PUBLICATIONS = [
  { venue:"CVPR", year:"2026", tag:"Highlight",
    title:"Omni-3DEdit: Generalized Versatile 3D Editing in One-Pass",
    authors:"L. Chen, P. Wang, G. Zhang, Z. Ma, L. Zhang",
    tagline:"The first generalized 3D editing model, with fast speed!",
    category:"3d",
    paper:"https://arxiv.org/abs/2603.17841",
    code:"https://github.com/mt-cly/Omni3DEdit" },

  { venue:"CVPR", year:"2026", tag:"Oral",
    title:"ANTS: Shaping the Adaptive Negative Textual Space by MLLM for OOD Detection",
    authors:"W. Zhu, Y. Zhang, X. Jin, W. Zeng, L. Zhang",
    tagline:"Can MLLM help OOD detection?",
    category:"multimodal",
    paper:"https://www.arxiv.org/abs/2509.03951",
    code:"https://github.com/ZhuWenjie98/ANTS" },

  { venue:"CVPR", year:"2026", tag:"Highlight",
    title:"VideoITG: Improving Multimodal Video Understanding with Instructed Temporal Grounding",
    authors:"S. Wang, G. Chen, D. Huang, Z. Li, M. Li, G. Li, J.M. Alvarez, L. Zhang, Z. Yu",
    tagline:"A plug-and-play approach and a dataset to improve video understanding tasks!",
    category:"multimodal",
    paper:"https://arxiv.org/abs/2507.13353",
    code:"https://github.com/NVlabs/VideoITG" },

  { venue:"CVPR", year:"2026",
    title:"VOSR: A Vision-Only Generative Model for Image Super-Resolution",
    authors:"R. Wu, L. Sun, Z. Zhang, X. Kong, J. Zhao, S. Wang, L. Zhang",
    tagline:"Train strong generative SR models from scratch without text–image pairs!",
    category:"restoration",
    paper:"https://arxiv.org/pdf/2604.03225",
    code:"https://github.com/cswry/VOSR" },

  { venue:"CVPR", year:"2026",
    title:"GDPO-SR: Group Direct Preference Optimization for One-Step Generative Image Super-Resolution",
    authors:"Q. Yi, S. Li, R. Wu, L. Sun, Z. Zhang, L. Zhang",
    tagline:"Can we apply RL to one-step diffusion SR models?",
    category:"restoration",
    paper:"https://arxiv.org/pdf/2603.16769",
    code:"https://github.com/Joyies/GDPO" },

  { venue:"CVPR", year:"2026",
    title:"BinaryAttention: One-Bit QK-Attention for Vision and Diffusion Transformers",
    authors:"C. Xiao, Z. Zhang, L. Zhang",
    tagline:"Extremely low-bit attention without performance degradation!",
    category:"architecture",
    paper:"https://arxiv.org/abs/2603.09582",
    code:"https://github.com/EdwardChasel/BinaryAttention" },

  { venue:"CVPR", year:"2026",
    title:"MICo-150K: A Comprehensive Dataset Advancing Multi-Image Composition",
    authors:"X. Wei, K. Cen, H. Wei, Z. Guo, B. Li, Z. Wang, J. Zhang, L. Zhang",
    tagline:"An elaborately constructed dataset and a strong baseline model!",
    category:"benchmarks",
    paper:"https://arxiv.org/abs/2512.07348",
    code:"https://github.com/A113N-W3I/MICo-150K" },

  { venue:"CVPR", year:"2026",
    title:"Photo3D: Advancing Photorealistic 3D Generation through Structure-Aligned Detail Enhancement",
    authors:"X. Liang, Z. Ma, L. Sun, Y. Guo, L. Zhang",
    tagline:"To make 3D generation results more realistic!",
    category:"3d",
    paper:"https://arxiv.org/abs/2512.08535",
    code:"https://github.com/Liangsanzhu/Photo3D/" },

  { venue:"CVPR", year:"2026",
    title:"It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal",
    authors:"L. Qu, S. Zhou, J. Liang, H. Zeng, L. Zhang, J. Yang",
    tagline:"Capture your precious moment without annoying flickers!",
    category:"restoration" },

  { venue:"ICLR", year:"2026",
    title:"One2Scene: Geometric Consistent Explorable 3D Scene Generation from a Single Image",
    authors:"P. Wang, L. Chen, Z. Ma, Y. Guo, G. Zhang, L. Zhang",
    tagline:"Generating an explorable 3D scene from a single image!",
    category:"3d",
    paper:"https://arxiv.org/pdf/2602.19766",
    code:"https://one2scene5406.github.io/" },

  { venue:"ICLR", year:"2026",
    title:"Many-for-Many: Unify the Training of Multiple Video and Image Generation and Manipulation Tasks",
    authors:"T. Yang, R. Li, Y. Shi, Y. Zhang, Q. Dong, H. Cheng, W. Feng, S. Wen, B. Peng, L. Zhang",
    tagline:"One model, many tasks!",
    category:"synthesis",
    paper:"https://arxiv.org/abs/2506.01758",
    code:"https://github.com/leeruibin/MfM" },

  { venue:"IJCV", year:"2026",
    title:"Restoration Adaptation for Semantic Segmentation on Low Quality Images",
    authors:"K. Guan, R. Wu, S. Li, W. Zhu, W. Zeng, L. Zhang",
    tagline:"Effective segmentation on real-world low-quality images!",
    category:"restoration",
    paper:"https://www.arxiv.org/abs/2602.14042",
    code:"https://github.com/Ka1Guan/RASS" },

  { venue:"Preprint", year:"2025",
    title:"NSARM: Next-Scale Autoregressive Modeling for Robust Real-World Image Super-Resolution",
    authors:"X. Kong, R. Wu, S. Liu, L. Sun, L. Zhang",
    tagline:"An efficient and robust AR model for real-world super-resolution!",
    category:"restoration",
    paper:"https://arxiv.org/abs/2510.00820",
    code:"https://github.com/Xiangtaokong/NSARM" },

  { venue:"Preprint", year:"2025",
    title:"VideoVerse: Does Your T2V Generator Have World Model Capability to Synthesize Videos?",
    authors:"Z. Wang, X. Wei, B. Li, Z. Guo, J. Zhang, H. Wei, K. Wang, L. Zhang",
    tagline:"To evaluate how strong your T2V model is!",
    category:"benchmarks",
    paper:"https://arxiv.org/abs/2510.08398",
    code:"https://www.naptmn.cn/Homepage_of_VideoVerse/" },

  { venue:"Preprint", year:"2025",
    title:"TIIF-Bench: How Does Your T2I Model Follow Your Instructions?",
    authors:"X. Wei, J. Zhang, Z. Wang, H. Wei, Z. Guo, L. Zhang",
    tagline:"Accurately evaluate T2I models' real performance!",
    category:"benchmarks",
    paper:"https://www.arxiv.org/abs/2506.02161",
    code:"https://a113n-w3i.github.io/TIIF_Bench/" },

  { venue:"Preprint", year:"2026",
    title:"CoCoEdit: Content-Consistent Image Editing via Region Regularized Reinforcement Learning",
    authors:"Y. Wu, C. Xie, R. Li, L. Chen, Q. Yi, L. Zhang",
    tagline:"Edit the image as you instruct without changing background details!",
    category:"synthesis",
    paper:"https://arxiv.org/abs/2602.14068",
    code:"https://github.com/langmanbusi/CoCoEdit" },

  { venue:"Preprint", year:"2026",
    title:"Self-transcendence: Is External Feature Guidance Indispensable for Accelerating Diffusion Transformer Training?",
    authors:"L. Sun, R. Wu, Z. Zhang, R. Li, Y. Sun, S. Liu, L. Zhang",
    tagline:"Do we really need pre-trained external features to accelerate DiT training?",
    category:"architecture",
    paper:"https://arxiv.org/abs/2601.07773",
    code:"https://github.com/csslc/Self-Transcendence" },

  { venue:"Preprint", year:"2026",
    title:"Diversity-Preserved Distribution Matching Distillation for Fast Visual Synthesis",
    authors:"T. Wu, R. Li, L. Zhang, K. Ma",
    tagline:"Completely address the loss of diversity in DMD distillation!",
    category:"synthesis",
    paper:"https://arxiv.org/abs/2602.03139",
    code:"https://github.com/Multimedia-Analytics-Laboratory/dpdmd" },

  { venue:"Preprint", year:"2026",
    title:"Pretraining A Large Language Model using Distributed GPUs: A Memory-Efficient Decentralized Paradigm",
    authors:"J. Zhang, C. Xiao, A. Wu, X. Zhang, L. Zhang",
    tagline:"Can we train large-scale LLMs using GPUs with low memory?",
    category:"architecture",
    paper:"https://arxiv.org/abs/2602.11543",
    code:"https://github.com/zjr2000/SPES" },

  { venue:"Preprint", year:"2025",
    title:"PhyDetEx: Detecting and Explaining the Physical Plausibility of T2V Models",
    authors:"Z. Wang, K. Wang, L. Zhang",
    tagline:"Is the generated video physically plausible and why?",
    category:"benchmarks",
    paper:"https://arxiv.org/abs/2512.01843",
    code:"https://github.com/Zeqing-Wang/PhyDetEx" }
];

window.TEAM = [
  { name:"孙雨菁",           role:"PhD Student", initials:"SY" },
  { name:"梁欣悦",           role:"PhD Student", initials:"LX" },
  { name:"孙凌晨",           role:"PhD Student", initials:"SL" },
  { name:"齐致远",           role:"PhD Student", initials:"QZ" },
  { name:"王仕豪",           role:"PhD Student", initials:"WS" },
  { name:"马致远",           role:"PhD Student", initials:"MZ" },
  { name:"张宁",             role:"Postdoctoral Fellow", initials:"ZN" },
  { name:"孔祥涛",           role:"PhD Student", initials:"KX" },
  { name:"郭彦君",           role:"PhD Student", initials:"GY" },
  { name:"吴荣源",           role:"PhD Student", initials:"WR" },
  { name:"李佰睿",           role:"PhD Student", initials:"LB" },
  { name:"惠乐",             role:"PhD Student", initials:"HL" },
  { name:"陈李易",           role:"PhD Student", initials:"CL" },
  { name:"李锐斌",           role:"PhD Student", initials:"LR" },
  { name:"朱文杰",           role:"PhD Student", initials:"ZW" },
  { name:"肖超东",           role:"PhD Student", initials:"XC" },
  { name:"梁杰",             role:"PhD Student", initials:"LJ" },
  { name:"郭震",             role:"PhD Student", initials:"GZ" },
  { name:"李语翀",           role:"PhD Student", initials:"LY" },
  { name:"何晨杭",           role:"RAP", initials:"HC" },
  { name:"吴煜辉",           role:"PhD Student", initials:"WY" },
  { name:"王鹏飞",           role:"PhD Student", initials:"WP" },
  { name:"魏心宇",           role:"PhD Student", initials:"WX" },
  { name:"张国文",           role:"PhD Student", initials:"ZG" },
  { name:"易侨斯",           role:"PhD Student", initials:"YQ" },
  { name:"张世辰",           role:"PhD Student", initials:"ZS" },
  { name:"郑兆晖",           role:"Postdoctoral Fellow", initials:"ZZ" },
  { name:"刘帅政",           role:"PhD Student", initials:"LS" },
  { name:"张郑强",           role:"PhD Student", initials:"ZZ" },
  { name:"郭梓贤",           role:"PhD Student", initials:"GZ" },
  { name:"谢晨熹",           role:"PhD Student", initials:"XC" },
  { name:"张金锐",           role:"PhD Student", initials:"ZJ" }
];

window.COLLECTIONS = {
  restoration: {
    num: "01",
    title: "Image / Video Restoration, Enhancement & Quality Assessment",
    lead: "We develop state-of-the-art methods for real-world visual restoration — super-resolution, denoising, deblurring, dehazing, HDR, flicker removal — and rigorous quality assessment metrics, with active industry-connected research through OPPO Research Institute.",
    tags: ["Real-world SR", "Denoising", "Deblurring", "HDR", "Restoration for Downstream", "IQA / VQA"],
    topics: [
      { title:"Image Restoration",           desc:"Restoring clean and faithful images from complex real-world degradations." },
      { title:"Video Restoration",           desc:"Improving temporal consistency, detail and visual quality in degraded videos." },
      { title:"Visual Enhancement",          desc:"Enhancing perceptual quality, visibility and usability for real imaging scenarios." },
      { title:"Generative Restoration",      desc:"Using generative priors to recover realistic details for challenging restoration tasks." },
      { title:"Restoration for Perception",  desc:"Studying how restoration supports downstream understanding and decision tasks." },
      { title:"Image / Video Quality",       desc:"Building assessment methods aligned with human perception and real-world needs." }
    ]
  },
  multimodal: {
    num: "02",
    title: "Multimodal Perception, Understanding & Reasoning",
    lead: "We advance Multimodal Large Language Models (MLLMs) for perception, grounding and reasoning — enabling models that truly understand images and videos, ground concepts temporally and spatially, and reason across modalities.",
    tags: ["MLLM", "VLM", "Grounding", "Video Understanding", "OOD Detection", "Reasoning"],
    topics: [
      { title:"Video Understanding",         desc:"Understanding events, temporal structure and semantics in visual content." },
      { title:"Visual Perception",           desc:"Connecting low-level visual signals with high-level concepts and tasks." },
      { title:"Multimodal Reasoning",        desc:"Reasoning over images, videos and language for richer visual intelligence." },
      { title:"Vision-Language Models",      desc:"Improving alignment and interaction between visual representations and language." },
      { title:"Unified Multimodal Models",   desc:"Developing models that can support multiple perception and understanding tasks." },
      { title:"Efficient / Mobile MLLMs",    desc:"Exploring compact multimodal models for practical deployment scenarios." }
    ]
  },
  synthesis: {
    num: "03",
    title: "Image & Video Synthesis and Generation",
    lead: "We develop, accelerate and distill next-generation diffusion, DiT and autoregressive generators for image and video synthesis and editing. We work on sampling acceleration, one-step distillation, controllable editing and unified training.",
    tags: ["Diffusion", "DiT", "Autoregressive", "One-Step Distillation", "Image Editing", "Video Generation"],
    topics: [
      { title:"Image Generation",            desc:"Generating high-quality visual content with controllable and scalable models." },
      { title:"Video Generation",            desc:"Modeling motion, temporal consistency and scene dynamics for video synthesis." },
      { title:"Image / Video Editing",       desc:"Editing visual content according to user intent while preserving key details." },
      { title:"Controllable Generation",     desc:"Guiding generation with structure, regions, text and other conditions." },
      { title:"Fast Visual Synthesis",       desc:"Accelerating diffusion, DiT and autoregressive generation for practical use." },
      { title:"Unified Generative Models",   desc:"Training models that can cover multiple generation and manipulation tasks." }
    ]
  },
  "3d": {
    num: "04",
    title: "3D Perception, Reconstruction & Generation",
    lead: "We build systems that sense, reconstruct, synthesize and edit high-fidelity 3D worlds from images, videos and language — covering explorable scene generation, photorealistic asset synthesis and generalized 3D editing.",
    tags: ["Scene Generation", "3D Editing", "NeRF / Gaussian", "Single-Image-to-3D", "Photorealism"],
    topics: [
      { title:"3D Generation",               desc:"Synthesizing realistic 3D assets and scenes from visual or language inputs." },
      { title:"3D Editing",                  desc:"Editing 3D content with flexible controls and consistent scene structure." },
      { title:"3D Reconstruction",           desc:"Recovering geometry, appearance and scene layout from images or videos." },
      { title:"Explorable Scenes",           desc:"Building navigable and geometrically consistent 3D scenes from limited inputs." },
      { title:"Photorealistic 3D",           desc:"Improving structure, texture and detail for more realistic 3D results." },
      { title:"3D Perception",               desc:"Understanding objects, scenes and relationships in 3D visual worlds." }
    ]
  },
  architecture: {
    num: "05",
    title: "Architecture & Training Paradigms",
    lead: "We study new architectures for vision transformers, diffusion transformers, LLMs and VLMs — and the training paradigms that make them efficient: low-bit attention, decentralized pretraining and feature-free acceleration.",
    tags: ["Transformer", "DiT", "LLM", "VLM", "Low-Bit", "Distributed Training"],
    topics: [
      { title:"Efficient Architectures",     desc:"Designing compact and capable models for vision, language and generation." },
      { title:"Transformer Attention",       desc:"Improving attention mechanisms for efficient vision and diffusion transformers." },
      { title:"Sequence Modeling",           desc:"Exploring alternative model families for long-range visual and multimodal modeling." },
      { title:"Distributed Training",        desc:"Studying memory-efficient training paradigms for large-scale models." },
      { title:"Generative Model Training",   desc:"Improving training strategies for diffusion, DiT and visual synthesis models." },
      { title:"On-Device Efficiency",        desc:"Pushing model efficiency for practical and mobile-friendly visual intelligence." }
    ]
  },
  benchmarks: {
    num: "06",
    title: "Benchmarks & Datasets",
    lead: "Rigorous, reproducible science needs rigorous, reproducible evaluation. VCLab contributes comprehensive benchmarks and datasets for T2I / T2V instruction following, video world-model capabilities, multi-image composition and physical plausibility.",
    tags: ["Benchmarks", "Datasets", "T2I / T2V", "World Models", "Physics", "Multi-Image"],
    topics: [
      { title:"Visual Generation Evaluation", desc:"Evaluating how well image and video generation models follow instructions." },
      { title:"Video World Models",          desc:"Testing whether video generators capture dynamics, causality and scene behavior." },
      { title:"Physical Plausibility",       desc:"Assessing whether generated visual content follows common physical constraints." },
      { title:"Multi-Image Datasets",        desc:"Building data resources for composition, editing and multi-image reasoning." },
      { title:"Restoration Benchmarks",      desc:"Evaluating image and video restoration under realistic degradation settings." },
      { title:"Reproducible Evaluation",     desc:"Designing benchmarks and metrics that make model comparison more reliable." }
    ]
  }
};
