const { Post } = require('../models');

const postData = [
  {
    title: 'Sleep is overrated in programming',
    post_text: 'I was gonna sleep last night, but, uh... I thought I had this solve for this computational trust issue I have been working on, but it turns out, I did not have a solve. But it was too late. I had already drank the whole pot of coffee.',
    user_id: 1
  },
  {
    title: 'Success',
    post_text: 'Every time we have gotten a whiff of success, a giant pelican by the name of Fate takes a four-and-a-half pound $4|+ right on top of us.',
    user_id: 2
  },
  {
    title: 'Security is for the birds',
    post_text: 'My username is "password" and my password is "password". It was just easier',
    user_id: 3
  },
  {
    title: 'What is socializing?',
    post_text: 'Gaining someones confidence is easy. Appear open and interested by mimicking their body language and repeating what they say back to them. I just repeat what they say. I was social engineering them. Once trust is established, the social engineer simply offers up information, and the subject will reciprocate: Pets names, kids names, birthdays. Then, that information is entered into a word list generator. Pop it with their hash into John The Ripper, and within minutes, you have their passwords.',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;