<template>
  <div class="container">
    <header>
      <h1 class="page-title">Personal info</h1>
      <p class="page-desc">
        Info about you and your preferences across Google services
      </p>
    </header>
    <PageIntro :data="introFirst" />
    <div class="page-cards">
      <CardInfo :data="profile" />
      <CardInfo :data="contact" />
    </div>
    <div class="page-xcards">
      <XCard :data="xcardProfile" />
      <XCard :data="xcardOther" />
    </div>
    <PageIntro :data="introSecond" />
    <div class="page-others">
      <CardOther :data="cardOtherPassword" />
      <CardOther :data="cardOtherGeneral" />
    </div>
    <div class="page-lookingfor">
      <CardOther :data="cardOtherLookingFor" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import PageIntro from "@/components/personal_info/PageIntro.vue";
import CardOther from "@/components/personal_info/CardOther.vue";
import XCard from "@/components/personal_info/XCard.vue";
import CardInfo from "@/components/personal_info/CardInfo.vue";
export default {
  components: { PageIntro, CardOther, XCard, CardInfo },
  setup() {
    const introFirst = reactive({
      title: "Your profile info in Google services",
      desc: "Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.",
      image: require("@/assets/img/components/profile_scene_visible.png"),
      image_mobile: require("@/assets/img/components/profile_scene_visible_mobile.png"),
    });
    const introSecond = reactive({
      title: "Other info and preferences for Google services",
      desc: "Ways to verify it’s you and settings for the web",
      image: require("@/assets/img/components/profile_scene_preferences.png"),
      image_mobile: require("@/assets/img/components/profile_scene_preferences_mobile.png"),
    });
    const profile = reactive({
      title: "Basic info",
      desc: "<p> Some info may be visible to other people using Google services. <a href='https://support.google.com/accounts/answer/6304920?hl=en&amp;utm_source=google-account&amp;utm_medium=profile-card' target='_blank'> Learn more </a></p>",
      items: [
        {
          label: "Photo",
          content: ["A photo helps personalize your account"],
          image: require("@/assets/img/components/user.gif"),
          link: "#",
        },
        {
          label: "Name",
          content: ["Diky Mury"],
          image: null,
          link: "#",
        },
        {
          label: "Birthday",
          content: ["June 15, 1997"],
          image: null,
          link: "#",
        },
        {
          label: "Gender",
          content: ["Male"],
          image: null,
          link: "#",
        },
      ],
    });
    const contact = reactive({
      title: "Contact info",
      desc: null,
      items: [
        {
          label: "Email",
          content: ["dikymury@gmail.com", "dickymrosyid@gmail.com"],
          image: null,
          link: "#",
        },
        {
          label: "Phone",
          content: ["0878-2049-1259", "0878-2049-1266"],
          image: null,
          link: "#",
        },
      ],
    });
    const xcardProfile = reactive({
      title: "Your profiles",
      desc: "See how your different profiles appear in Google services",
      label_link: "See profiles",
      link: "#",
      image: null,
    });
    const xcardOther = reactive({
      title: "Choose what others see",
      desc: "Decide what personal information you make visible to others when you use your main Google Account profile across Google services",
      label_link: "Go to About me",
      link: "#",
      image: require("@/assets/img/components/data.png"),
    });
    const cardOtherPassword = reactive({
      title: "Password",
      desc: "A secure password helps protect your Google Account",
      items: [
        {
          link: "#",
          icon: null,
          title: "••••••••",
          subtitle: "Last changed Nov 3, 2015",
        },
      ],
    });
    const cardOtherGeneral = reactive({
      title: "General preferences for the web",
      desc: "Manage settings for Google services on the web",
      items: [
        {
          link: "#",
          icon: "cicon-earth",
          title: "Language",
          subtitle: "Indonesia (Indonesia)",
        },
        {
          link: "#",
          icon: "cicon-keyboard",
          title: "Input Tools",
          subtitle: "Type more easily in your language",
        },
        {
          link: "#",
          icon: "cicon-accessibility",
          title: "Accessibility",
          subtitle: "High-contrast colors OFF",
        },
      ],
    });
    const cardOtherLookingFor = reactive({
      title: "Looking for something else?",
      desc: null,
      items: [
        {
          link: "#",
          icon: "cicon-search",
          title: null,
          subtitle: "Search Google Account",
        },
        {
          link: "#",
          icon: "cicon-help",
          title: null,
          subtitle: "See help options",
        },
        {
          link: "#",
          icon: "cicon-feedback",
          title: null,
          subtitle: "Send feedback",
        },
      ],
    });
    return {
      profile,
      contact,
      xcardProfile,
      xcardOther,
      introFirst,
      introSecond,
      cardOtherPassword,
      cardOtherGeneral,
      cardOtherLookingFor,
    };
  },
};
</script>
