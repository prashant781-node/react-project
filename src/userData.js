const users = [
  {
    _id: "123",
    userFirstName: "sharad",
    userLastName: "Garg",
    profilePic:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/user-pic.png",
    accountSettingsImage:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/user.png",
    postTopBarImage:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/us-pic.png",
    posts: [
      {
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... ",
        postImage:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/career.png",
        postComments: [
          {
            commentingUser: "himani",
            comment: "nice pic",
          },
          {
            commentingUser: "prashant",
            comment: "very nice pic",
          },
        ],
        postLikes: [
          {
            likedBy: "himani",
          },
          {
            likedBy: "prashant",
          },
        ],
      },
      {
        postDescription: "hello how are you ",
        postImage: "",
        postComments: [],
        postLikes: [
          {
            likedBy: "himani",
          },
        ],
      },
      {
        postDescription: "hi m fine ",
        postImage:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/ad1.png",
        postComments: [],
        postLikes: [],
      },
    ],
    friends: [
      {
        firstName: "abc",
      },
      {
        firstName: "xyz",
      },
      {
        firstName: "efgh",
      },
    ],
    nominee: [
      {
        firstName: "abc",
      },
      {
        firstName: "xyz",
      },
    ],
  },
];

export default function getUser(id) {
  return users.find((user) => user._id === id);
}