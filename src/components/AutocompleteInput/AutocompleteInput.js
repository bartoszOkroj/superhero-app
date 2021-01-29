import React from 'react';
import './Autocomplete.css';

class AutoCompleteInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestionIndex : 0,
            filteredSuggestions : [],
            show : false,
            userInput: '',
        }
    }

    onChange = event => {
        let { suggestions }  = this.props;
        let userInput = event.currentTarget.value;

        let filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.substr(0, userInput.length).toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            suggestionIndex: 0,
            filteredSuggestions,
            show: true,
            userInput: event.currentTarget.value,
        });
    };

    onClick = event => {
        this.setState({
            suggestionIndex: 0,
            filteredSuggestions: [],
            show: false,
            userInput: event.currentTarget.innerText,
        });
    };

    onKeyDown = event => {
        const { suggestionIndex, filteredSuggestions } = this.state;

        if(event.keyCode === 13) {
            this.setState({
                suggestionIndex: 0,
                show: false,
                userInput: filteredSuggestions[suggestionIndex],
            });
        } else if(event.onKeyDown === 38) {
            if(suggestionIndex === 0) {
                return;
            }
            this.setState({
                suggestionIndex: suggestionIndex - 1,
            });
        } else if (event.keyCode === 40) {
            if (suggestionIndex - 1 === filteredSuggestions.length) {
                return;
            }
        }
        this.setState({
            suggestionIndex : suggestionIndex + 1,
        })
    }

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                suggestionIndex,
                filteredSuggestions,
                show,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (show && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul class="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === suggestionIndex) {
                                className = "suggestion-active";
                            }

                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>There's no user with that name, please enter your name again</em>
                    </div>
                );
            }
        }

        return (
            <div>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </div>
        );
    }
}

export default AutoCompleteInput;