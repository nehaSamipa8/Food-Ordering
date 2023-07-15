const foodItem= [
    {
    id: 1,
    name: 'Ambur Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'https://th.bing.com/th/id/OIP.J1Y7AMxYqf7DbccV89hGjAHaEn?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 2,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://th.bing.com/th/id/OIP.ADaCTyBtm3XugW9abjRJKwHaE7?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 3,
    name: 'Egg Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 18,
    img: 'https://th.bing.com/th/id/R.0b86955cd970c5e25cb3699a9bcead06?rik=EKmIlVlDbI5%2b6Q&riu=http%3a%2f%2fi1.wp.com%2fwww.relishthebite.com%2fwp-content%2fuploads%2f2015%2f02%2fEGgBiryani-2.jpg&ehk=7%2foqj4YDPBqQCSgvvGxtqqkTCz0OyN2nuRUI1yNnWF0%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 4,
    name: 'Goan Fish Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://th.bing.com/th/id/OIP.1qQGOJwJs3Dl7Cia1fNOeAHaJ4?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 5,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 10,
    img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Kamrupi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 12,
    img: 'https://i2.wp.com/thefoodsamaritan.com/wp-content/uploads/2016/05/IMG_1130.jpg?fit=4726%2C3456',
    quantity: 1
},
{
    id: 7,
    name: 'Kashmiri Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'https://i2.wp.com/thefoodsamaritan.com/wp-content/uploads/2016/05/IMG_1130.jpg?fit=4726%2C3456',
    quantity: 1
},
{
    id: 8,
    name: 'Memoni Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 20,
    img: 'https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-4.jpg?resize=600%2C900',
    quantity: 1
},
{
    id: 9,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://th.bing.com/th/id/OIP.u6YYiBt_zhmG91YA1bsnegHaHa?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 10,
    name: 'Chicken Roast',
    category : 'chicken',
    rating : 4.3,
    price: 11,
    img: 'https://th.bing.com/th/id/R.b175097237c8252104fa30fd4bfd4830?rik=T9U6hwdxWRJLOw&riu=http%3a%2f%2fsimplysated.com%2fwp-content%2fuploads%2f2015%2f09%2f1-roast-chicken-19c-P9150019.jpg&ehk=AlSR71QO%2bpgqrlyMXyq2%2fRIxGuOi2u9%2fDxSMvSQAVqg%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 11,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.3,
    price: 10,
    img: 'https://recipesfromapantry.com/wp-content/uploads/2018/05/instant-pot-chicken-curry-11.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Chicken Do Pyaza',
    category : 'chicken',
    rating : 4.3,
    price: 14,
    img: 'https://nishkitchen.com/wp-content/uploads/2018/10/Chicken-do-pyaza-2B.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Chicken Masala',
    category : 'chicken',
    rating : 4.3,
    price: 12,
    img: 'https://yummyindiankitchen.com/wp-content/uploads/2017/08/chicken-masala-spicy-gravy-recipe-indian-restaurant-style.jpg',
    quantity: 1
},
{
    id: 14,
    name: 'Handi Chicken',
    category : 'chicken',
    rating : 4.3,
    price: 17,
    img: 'https://tandooriflamesmelbourne.com.au/wp-content/uploads/2018/12/chicken-handi.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Murgh Musallam',
    category : 'chicken',
    rating : 4.3,
    price: 20,
    img: 'https://th.bing.com/th/id/R.04a98ec3b7db726d89c842b3ccb13ea4?rik=Ri0ygwy0cpr2Sg&riu=http%3a%2f%2fspicyworld.in%2frecipeimages%2fmurgh-musallam.jpg&ehk=vUh4yujSSQnKsRssrqpBlmGtw7u2cap3mRH6cPCQIiM%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 16,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/06/Matar-Paneer-Thumbnail.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 10,
    img: 'https://th.bing.com/th/id/R.1221c284885df841e6e4c83e957065e5?rik=FmCLoajy4W9asQ&riu=http%3a%2f%2frecipes.timesofindia.com%2fphoto%2f53093667.cms&ehk=XJlGSqKSiJGSfS%2fs6Fz%2bQt3t1qmHUMBKEC4h%2baKoTEo%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 18,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1-1152x1536.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'Paneer Do Pyaza',
    category : 'paneer',
    rating : 4.3,
    price: 12,
    img: 'https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2016/11/Paneer-Do-Pyaaza-3.jpg?resize=1024%2C680',
    quantity: 1

},
{
    id: 20,
    name: 'Hyderabadi Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 8,
    img: 'https://recipes.timesofindia.com/photo/53519548.cms?imgsize=137646',
    quantity: 1
},
{
    id: 21,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.3,
    price: 7,
    img: 'https://aplateofhappiness.files.wordpress.com/2018/10/img_1430.jpg',
    quantity: 1
},
{
    id: 22,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.3,
    price: 5,
    img: 'https://th.bing.com/th/id/R.fefadd6377563996d272d2d2611d9a10?rik=iXFkuD%2bTOeZRhA&riu=http%3a%2f%2fwww.cuisine.recipes%2fwp-content%2fuploads%2f2015%2f03%2fShahi-paneer-862x848.jpeg&ehk=cS17vlJZtpHlNQVAVY2HzMHtZ6luMnLJZwC%2bUPo%2fGCM%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.3,
    price: 8,
    img: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Preeti_Tamilarasan/Navratan_Korma.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Veg Jalfrezi',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://i0.wp.com/www.smithakalluraya.com/wp-content/uploads/2017/03/VEG-JALFREZI.jpg?fit=1500%2C1768',
    quantity: 1
},
{
    id: 25,
    name: 'Veg Biryani',
    category : 'vegetable',
    rating : 4.3,
    price: 5,
    img: 'https://i1.wp.com/vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg?fit=3563%2C2976&quality=30&strip=all&ssl=1',
    quantity: 1
},
{
    id: 26,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/One_Pot_Mixed_Vegetable_Curry_Recipe_in_Electric_Pressure_Cooker_Insta_Pot-4.jpg',
    quantity: 1
},
{
    id: 27,
    name: 'Veg Kolhapur',
    category : 'vegetable',
    rating : 4.3,
    price: 10,
    img: 'https://www.awesomecuisine.com/wp-content/uploads/2015/04/veg-kolhapuri.jpg',
    quantity: 1
},
{
    id: 28,
    name: 'Veg Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'https://th.bing.com/th/id/OIP.aqKqQ2aTx4TQW3m9tLRUpwHaLG?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 29,
    name: 'Veg Pakora',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'https://th.bing.com/th/id/OIP.NMUyvxNzr6WKrjcYMNeIVgHaE8?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 30,
    name: 'Momos',
    category : 'chinese',
    rating : 4.9,
    price: 8,
    img: 'https://www.myyellowplate.com/wp-content/uploads/2021/07/Best-Momos-in-Delhi-at-Hudson-Chopsticks-1600x1066.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Chicken Manchurian',
    category : 'chinese',
    rating : 4.3,
    price: 7,
    img: 'https://1.bp.blogspot.com/-kkU0H6NnqA4/XqUQEWqLYDI/AAAAAAAAALg/kZKZXJri-3Uj7dHiPnJt2gdZxMU67ybvACLcBGAsYHQ/s1600/0001cm%255B1%255D.jpg',
    quantity: 1
},
{
    id: 32,
    name: 'Chili Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 5,
    img: 'https://i2.wp.com/www.gofooddy.com/wp-content/uploads/2017/07/chilli-chicken.jpg?fit=1600%2C1174&ssl=1',
    quantity: 1
},
{
    id: 33,
    name: 'Chowmin',
    category : 'chinese',
    rating : 4.3,
    price: 16,
    img: 'https://th.bing.com/th/id/OIP.S4lfEFP5NlL4FTEmfxq_TAHaLE?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 34,
    name: 'Spring Rolls',
    category : 'chinese',
    rating : 4.3,
    price: 14,
    img: 'https://www.marionskitchen.com/wp-content/uploads/2019/02/20170828_spring-roll-FB-Live-3-1024x1024.jpg',
    quantity: 1
},
{
    id: 35,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 10,
    img: 'https://th.bing.com/th/id/R.7171d05714255f09e4f7bf95a197a3e9?rik=y1D8i31zKeFGeA&riu=http%3a%2f%2fwww.lordbyronskitchen.com%2fwp-content%2fuploads%2f2016%2f11%2f1-8.jpg&ehk=1%2bNZ4esp%2f6TwW5FK%2bcQADSMd53kJ586zmNamKEajq%2bI%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 36,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'https://th.bing.com/th/id/R.0e19e0323e1b8628f72717f728a4f658?rik=MXqHbLwgaDGd0g&riu=http%3a%2f%2fwww.seriouseats.com%2fimages%2f2016%2f01%2f20160206-fried-rice-food-lab-68.jpg&ehk=8MLDBVEqpJa%2bx%2b8NKIJZ8jtVK9W8R3bzpn4CgJh9WjU%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 37,
    name: 'Butter Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 18,
    img: 'https://i2.wp.com/www.cookingfromheart.com/wp-content/uploads/2018/02/Open-Butter-Masala-Dosa-6.jpg?resize=683%2C1024',
    quantity: 1
},
{
    id: 38,
    name: 'Idli',
    category : 'south indian',
    rating : 4.3,
    price: 20,
    img: 'https://static.toiimg.com/photo/68631114.cms',
    quantity: 1
},
{
    id: 39,
    name: 'Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 12,
    img: 'https://www.cookwithkushi.com/wp-content/uploads/2021/12/IMG_5804e.jpg',
    quantity: 1
},
{
    id: 40,
    name: 'Mysore Bonda',
    category : 'south indian',
    rating : 4.3,
    price: 10,
    img: 'https://th.bing.com/th/id/R.c1f34238965ed0c15fcbec644141debf?rik=y6ia%2fWZxyAPumQ&riu=http%3a%2f%2fi0.wp.com%2fkalimirchbysmita.com%2fwp-content%2fuploads%2f2016%2f07%2fMysore-Bonda-02.jpg&ehk=CN9eln3IfGUfs6gBmAuxRZ5GUW6NRRZ8nhgU1Aa02Kw%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 15,
    img: 'https://recipes.timesofindia.com/thumb/53537841.cms?imgsize=368508&width=800&height=800',
    quantity: 1
},
{
    id: 42,
    name: 'Plain Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 40,
    img: 'https://th.bing.com/th/id/OIP.68GxRRlgIA34Z3lHEUS83QHaJQ?pid=ImgDet&rs=1',
    quantity: 1
},
{
    id: 43,
    name: 'Rava Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 25,
    img: 'https://asmisfoodandspices.com/wp-content/uploads/2021/04/20210120_085836-scaled.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'south indian',
    rating : 4.3,
    price: 34,
    img: 'https://th.bing.com/th/id/R.dd9d665052bd2540fe51c5fba04467ef?rik=9BsNuDCyiRlOBA&riu=http%3a%2f%2fagarwalsweets.co.in%2fwp-content%2fuploads%2f2016%2f09%2fsambar-vada-1.jpg&ehk=Unlnj5XAA0xbkFPSXBb8MyHo1C4UxP4D0BW%2bVY6%2bqGU%3d&risl=&pid=ImgRaw&r=0',
    quantity: 1
},
]

export {foodItem};