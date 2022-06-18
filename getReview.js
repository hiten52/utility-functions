// Function to retrieve reviews

const getReview = (reviews, id) => {
    return reviews.find(review => review.id === id);
}