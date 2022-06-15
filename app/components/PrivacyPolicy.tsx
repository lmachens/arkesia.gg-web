import { Anchor, Container, List, Text, Title } from "@mantine/core";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    // @ts-ignore
    if (window["NitroPayCCPA"]) {
      // @ts-ignore
      window["NitroPayCCPA"].init();
    }
  }, []);

  return (
    <Container>
      <Title order={2}>Details</Title>
      <Text>
        At Arkesia.gg, accessible from https://arkesia.gg, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by
        Arkesia.gg and how we use it.
      </Text>

      <Text>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </Text>

      <Text>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Arkesia.gg. This policy is not applicable to
        any information collected offline or via channels other than this
        website. Our Privacy Policy was created with the help of the{" "}
        <Anchor href="https://www.privacypolicygenerator.info" target="_blank">
          Free Privacy Policy Generator
        </Anchor>
        .
      </Text>

      <Title order={2}>Consent</Title>

      <Text>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </Text>

      <Title order={2}>Information we collect</Title>

      <Text>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </Text>
      <Text>
        If you contact us directly, we may receive additional information about
        you such as your name, steam username, the contents of the message
        and/or attachments you may send us, and any other information you may
        choose to provide.
      </Text>
      <Text>
        When you register for an Account, we may ask for your steam information,
        including items such as name and Steam ID.
      </Text>

      <Title order={2}>How we use your information</Title>

      <Text>
        We use the information we collect in various ways, including to:
      </Text>

      <List>
        <List.Item>Provide, operate, and maintain our website</List.Item>
        <List.Item>Improve, personalize, and expand our website</List.Item>
        <List.Item>Understand and analyze how you use our website</List.Item>
        <List.Item>
          Develop new products, services, features, and functionality
        </List.Item>
        <List.Item>Find and prevent fraud</List.Item>
      </List>

      <Title order={2}>Log Files</Title>

      <Text>
        Arkesia.gg follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services' analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users' movement on
        the website, and gathering demographic information.
      </Text>

      <Title order={2}>Cookies and Web Beacons</Title>

      <Text>
        Like any other website, arkesia.gg uses 'cookies'. These cookies are
        used to store information including visitors' preferences, and the pages
        on the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing our web page
        content based on visitors' browser type and/or other information.
      </Text>

      <Text>
        For more general information on cookies, please read{" "}
        <Anchor href="https://www.generateprivacypolicy.com/#cookies">
          the Cookies article on Generate Privacy Policy website
        </Anchor>
        .
      </Text>

      <Title order={2}>Advertising Partners Privacy Policies</Title>

      <Text>
        You may consListt this list to find the Privacy Policy for each of the
        advertising partners of Arkesia.gg.
      </Text>

      <Text>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on Arkesia.gg, which are sent
        directly to users' browser. They automatically receive your IP address
        when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </Text>

      <Text>
        Note that Arkesia.gg has no access to or control over these cookies that
        are used by third-party advertisers.
      </Text>

      <Title order={2}>Third Party Privacy Policies</Title>

      <Text>
        Arkesia.gg's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.{" "}
      </Text>

      <Text>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites.
      </Text>

      <Title order={2}>
        CCPA Privacy Rights (Do Not Sell My Personal Information)
      </Title>

      <Text data-ccpa-link="1" />

      <Text>
        Under the CCPA, among other rights, California consumers have the right
        to:
      </Text>
      <Text>
        Request that a business that collects a consumer's personal data
        disclose the categories and specific pieces of personal data that a
        business has collected about consumers.
      </Text>
      <Text>
        Request that a business delete any personal data about the consumer that
        a business has collected.
      </Text>
      <Text>
        Request that a business that sells a consumer's personal data, not sell
        the consumer's personal data.
      </Text>
      <Text>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us.
      </Text>

      <Text data-ccpa-link="1" />

      <Title order={2}>GDPR Data Protection Rights</Title>

      <Text>
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
      </Text>
      <Text>
        The right to access – You have the right to request copies of your
        personal data. We may charge you a small fee for this service.
      </Text>
      <Text>
        The right to rectification – You have the right to request that we
        correct any information you believe is inaccurate. You also have the
        right to request that we complete the information you believe is
        incomplete.
      </Text>
      <Text>
        The right to erasure – You have the right to request that we erase your
        personal data, under certain conditions.
      </Text>
      <Text>
        The right to restrict processing – You have the right to request that we
        restrict the processing of your personal data, under certain conditions.
      </Text>
      <Text>
        The right to object to processing – You have the right to object to our
        processing of your personal data, under certain conditions.
      </Text>
      <Text>
        The right to data portability – You have the right to request that we
        transfer the data that we have collected to another organization, or
        directly to you, under certain conditions.
      </Text>
      <Text>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us.
      </Text>

      <Title order={2}>Children's Information</Title>

      <Text>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </Text>

      <Text>
        Arkesia.gg does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </Text>
    </Container>
  );
}
