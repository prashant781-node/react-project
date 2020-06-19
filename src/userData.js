const users = [
  {
    _id: "123",
    userFirstName: "Prashant",
    userLastName: "kansal",
    profilePic:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/user-pic.png",
    accountSettingsImage:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/user.png",
    postTopBarImage:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/us-pic.png",
    coverImgUrl:
      "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/user_cover-img.png",
    posts: [
      {
        _id: "1",
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
        _id: "2",
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
        _id: "3",
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
        imgUrl:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon1.png",
        location: "patiala",
        alive: true,
      },
      {
        firstName: "xyz",
        imgUrl:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon2.png",
        location: "noida",
        alive: false,
      },
      {
        firstName: "efgh",
        imgUrl:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon3.png",
        location: "noida",
        alive: false,
      },
      {
        firstName: "yhj",
        imgUrl:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon4.png",
        location: "mumbai",
        alive: false,
      },
    ],
    nominees: [
      {
        _id: 1,
        firstName: "abc",
        imgUrl:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon2.png",
        dateOfBirth: "21-02-1992",
        email_Id: "kansal.781@gmail.com",
      },
      {
        _id: 2,
        firstName: "xyz",
        imgUrl:
          "http://goinstablog.com/goinstablog.com/sumitdesign/design/liveon.com/common/images/resources/pf-icon1.png",
        dateOfBirth: "21-02-1992",
        email_Id: "kansal.781@gmail.com",
      },
    ],
  },
];

export default function getUser(id) {
  return users.find((user) => user._id === id);
}
