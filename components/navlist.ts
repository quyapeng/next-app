const NAVLIST = [
  {
    title: "首页",
    key: "home",
  },
  {
    title: "企业介绍",
    key: "info",
  },
  {
    title: "托育业务（0-3）",
    key: "care",
    active: false,
    children: [
      {
        title: "课程体系",
        key: "system",
      },
      {
        title: "装备介绍",
        key: "equipment",
      },
      {
        title: "整体系统介绍",
        key: "introduction",
      },
      {
        title: "综合能力评估",
        key: "evaluate",
      },
      {
        title: "托育照护技能",
        key: "skill",
      },
    ],
  },
  {
    title: "幼小衔接（3-6）",
    key: "young",
    active: false,
    children: [
      {
        title: "课程体系",
        key: "course",
      },
      {
        title: "产品特色",
        key: "feature",
      },
    ],
  },
  {
    title: "合作模式",
    key: "modal",
  },
  {
    title: "联系我们",
    key: "about",
  },
];

export { NAVLIST };
