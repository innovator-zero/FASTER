<p align="center">
  <h1 align="center">FASTER: Rethinking Real-Time Flow VLAs</h1>
  <p align="center">
    <strong><a href="https://innovator-zero.github.io/">Yuxiang Lu</a><sup>1,2</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://happinesslz.github.io/">Zhe Liu</a><sup>1,2</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://www.linkedin.com/in/xianzhefan">Xianzhe Fan</a><sup>1</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://huster-yzy.github.io/">Zhenya Yang</a><sup>1</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://scholar.google.com/citations?user=aoqtBAsAAAAJ&hl=en">Jinghua Hou</a><sup>1</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://provencestar.github.io/">Junyi Li</a><sup>1</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://kxding.github.io">Kaixin Ding</a><sup>1</sup></strong>
    &nbsp;&nbsp;
    <strong><a href="https://i.cs.hku.hk/~hszhao/">Hengshuang Zhao</a><sup>1,2</sup></strong>
  </p>

  <p align="center">
    <sup>1</sup> The University of Hong Kong
    <sup>2</sup> ACE Robotics
  </p>

  <p align="center">
  <a href="https://arxiv.org/abs/2603.19199"><img alt='arXiv' src="https://img.shields.io/badge/arXiv-2603.19199-b31b1b.svg"></a>
  <a href="https://innovator-zero.github.io/FASTER"><img alt='proj' src="https://img.shields.io/badge/Project Page-82B366.svg"></a>
  </p>
</p>


## TL;DR

Real-time reaction in VLAs is constrained not only by inference latency, but also by how action chunks are generated and executed. **FASTER** introduces a new paradigm for fast action sampling under asynchronous execution. By compressing the sampling process for immediate reaction into a single step, FASTER achieves **10x acceleration** over $\pi_{0.5}$ and X-VLA, enabling real-time responsiveness in highly dynamic tasks such as table tennis.

<img width="2960" height="836" alt="teaser" src="https://github.com/user-attachments/assets/121bf40a-20dc-41ff-bac0-c6d96edfb1c0" />

[Demo](https://github.com/user-attachments/assets/c16bd3fa-48ac-4d1b-aef9-4b0f4d839011)



## ✨ Abstract
Real-time execution is crucial for deploying Vision-Language-Action (VLA) models in the physical world. Existing asynchronous inference methods primarily optimize trajectory smoothness, but neglect the critical latency in reacting to environmental changes. By rethinking the notion of reaction in action chunking policies, this paper presents a systematic analysis of the factors governing reaction time. We show that reaction time follows a uniform distribution determined jointly by the Time to First Action (TTFA) and the execution horizon. Moreover, we reveal that the standard practice of applying a constant schedule in flow-based VLAs can be inefficient and forces the system to complete all sampling steps before any movement can start, forming the bottleneck in reaction latency. To overcome this issue, we propose **F**ast **A**ction **S**ampling for Immedia**TE** **R**eaction (**FASTER**). By introducing a Horizon-Aware Schedule, FASTER adaptively prioritizes near-term actions during flow sampling, compressing the denoising of the immediate reaction by tenfold (*e.g.*, in $\pi_{0.5}$ and X-VLA) into a single step, while preserving the quality of long-horizon trajectory. Coupled with a streaming client-server pipeline, FASTER substantially reduces the effective reaction latency on real robots, especially when deployed on consumer-grade GPUs. Real-world experiments, including a highly dynamic table tennis task, prove that FASTER unlocks unprecedented real-time responsiveness for generalist policies, enabling rapid generation of accurate and smooth trajectories.

## 📖 Citation

```
 @article{lu2026faster,
  title={FASTER: Rethinking Real-Time Flow VLAs}, 
  author={Yuxiang Lu and Zhe Liu and Xianzhe Fan and Zhenya Yang and Jinghua Hou and Junyi Li and Kaixin Ding and Hengshuang Zhao},
  year={2026},
  journal={arXiv preprint arXiv:2603.19199}
}
```
