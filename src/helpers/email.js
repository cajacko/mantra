import { Linking, Alert } from 'react-native';
import { feedbackEmail, contactEmail } from 'root/env.json';

const types = {
  feedback: {
    subject: 'Mantra App: Feedback',
    body: "Hi Mantra folk, here's some feedback:",
    email: feedbackEmail,
    alertTitle: 'Feedback',
    alertText: `Please email ${feedbackEmail} to give feedback`,
  },
  contact: {
    subject: 'Mantra App: Contact',
    body: 'Hi Mantra folk!',
    email: contactEmail,
    alertTitle: 'Contact',
    alertText: `Please email ${contactEmail} to contact us`,
  },
};

export default function (type) {
  let data = types[type];

  if (!data) {
    data = types.contact;
  }

  const { subject, email, body, alertTitle, alertText } = data;

  Linking.openURL(
    `mailto:${email}?subject=${subject}&body=${body}`,
  ).catch(() => {
    Alert.alert(alertTitle, alertText, [{ text: 'Close' }]);
  });
}
