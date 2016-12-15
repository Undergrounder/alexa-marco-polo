/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = null;

const handlers = {
    'NewSession': function () {
        this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));

        this.attributes.repromptSpeech = this.t('WELCOME_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'MarcoIntent': function () {
        this.attributes.speechOutput = 'Polo';
        this.attributes.repromptSpeech = this.t('REPEAT');

        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

const languageStrings = {
    'en-GB': {
        translation: {
            SKILL_NAME: 'Marco Polo',
            WELCOME_MESSAGE: "Welcome to %s. You can say „Marco“ and I will reply with „Polo“.",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            HELP_MESSAGE: "You can say „Marco“, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMT: "You can say „Marco“, or, you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            REPEAT: 'Repeat'
        },
    },
    'en-US': {
        translation: {
            SKILL_NAME: 'Marco Polo',
            WELCOME_MESSAGE: "Welcome to %s. You can say „Marco“ and I will reply with „Polo“.",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            HELP_MESSAGE: "You can say „Marco“, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMT: "You can say „Marco“, or, you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            RANDOM_NUMER_REPEAT: 'Repeat'
        },
    },
    'de-DE': {
        translation: {
            SKILL_NAME: 'Marco Polo',
            WELCOME_MESSAGE: 'Willkommen bei %s. Du kannst „Marco“ sagen und ich werde mit „Polo“ antworten.',
            WELCOME_REPROMT: 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.',
            HELP_MESSAGE: 'Du kannst „Marco“ oder „Beenden“ sagen ... Wie kann ich dir helfen?',
            HELP_REPROMT: 'Du kannst „Marco“ oder „Beenden“ sagen ... Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            RANDOM_NUMER_REPEAT: 'Wiederholen'
        },
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
