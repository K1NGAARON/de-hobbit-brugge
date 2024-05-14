function changeReviews() {
    const reviews = [
        {
            name: "Klant x",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum quae aut quo deleniti repellendus tempore voluptatem, tenetur id omnis.",
        },
        {
            name: "Klant x",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum quae aut quo deleniti repellendus tempore voluptatem, tenetur id omnis.",
        },
        {
            name: "Klant x",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum quae aut quo deleniti repellendus tempore voluptatem, tenetur id omnis.",
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