/**
 * Created by Somya Kumar Sodani on 24-09-2016.
 */
var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('home');
    $stateProvider


        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('hiw', {
            url: '/aboutUs',
            templateUrl: 'about.html'
        })
        .state('physicalprofile', {
            url: '/physicalProfile',
            templateUrl: 'healthdetailform.html',
            controller:'healthdetailformCtrl'

        })
        .state('mealplanner', {
            url: '/mealPlanner',
            templateUrl: 'mealplanner/index.html',
            controller:'mealplannerCtrl',
            css: ['mealplanner/style.css']

        })

        .state('blog', {
            url: '/discussionPortal',
            templateUrl: 'blog/blog.html'

        })

        .state('login', {
            url: '/login',
            templateUrl: 'form/login.html'

        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'form/signup.html'

        })

        .state('reminder', {
            url: '/reminder',
            templateUrl: 'reminder/index.html',
            controller: 'MealsController'

        })







});


















app.controller('BlogController', ['$http', function($http){

    var blog = this;
    blog.title = "Discuss Here ";

    blog.posts = {};

    blog.posts = [
        {
            "title": "Blog Post One",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        },
        {
            "title": "Blog Post Two",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        },

        {
            "title": "Blog Post Three",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        },

        {
            "title": "Blog Post Four",
            "body": [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
            ],
            "author": "Nick Moreton",
            "comments": [
                {
                    "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!",
                    "author": "trollguy87"
                }
            ],
            "likes":0,
            "image":"http://placekitten.com/g/2000/600",
            "createdOn":1408547127216
        }


    ];
    blog.tab = 'blog';

    blog.selectTab = function(setTab){
        blog.tab = setTab;
        console.log(blog.tab)
    };

    blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
    };

    blog.post = {};
    blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post ={};
    };

}]);

app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
        this.comment.createdOn = Date.now();
        post.comments.push(this.comment);
        this.comment ={};
    };
});


app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left = function() {
        return 100 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
        console.log('AT save');
    };
    $scope.save = function() {
        alert("Note Saved");
    };
});





