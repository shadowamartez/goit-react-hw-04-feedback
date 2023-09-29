import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            {options.map((option) => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};