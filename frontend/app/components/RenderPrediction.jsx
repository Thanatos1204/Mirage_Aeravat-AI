 const renderPrediction = (predictions) => {
    // Find the prediction with the highest score
    const highestConfidencePrediction = predictions.reduce((prev, current) => {
        return (prev.score > current.score) ? prev : current;
    });

    // Display the label and confidence score of the highest confidence prediction
    return (
        <p>Image is {highestConfidencePrediction.label} with confidence {highestConfidencePrediction.score * 100}%</p>
    );
}
export default renderPrediction;