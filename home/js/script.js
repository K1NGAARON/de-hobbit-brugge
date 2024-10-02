function changeReviews() {
    const reviews = [
        {
            name: "Rodolfo",
            review: "Hands down, the best restaurant I’ve ever been to in Brugge. Customer service was stellar and the food was excellent! The staff are extremely helpful, friendly, and professional.",
        },
        {
            name: "Kelly",
            review: "Really great place for grilled meats, it’s under new management so I’d ignore the bad reviews from years past. We ordered the scampi as our starter, and a steak and spareribs for our mains, everything was so good. Regrettably I couldn’t finish my meal, so be sure to come with an appetite. Staff was all so friendly and you can tell they are taking great pride in their establishment. Highly recommend.",
        },
        {
            name: "Leonie",
            review: "Fabulous! This was our 3rd visit to The Hobbit which is now open again under new management and is better than ever! We booked for NYE dinner and had a great evening. Staff were amazing, food was absolutely delicious & the atmosphere was brilliant. The restaurant was fully booked but we never waited very long to be served each course & staff were very attentive. Highly recommend this restaurant if you are ever in Brugge. The spare ribs are the best in town!",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);