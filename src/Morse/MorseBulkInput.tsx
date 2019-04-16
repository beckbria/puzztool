import React, { FormEvent, MouseEvent, SyntheticEvent } from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl, Well } from 'react-bootstrap';
import { MorseCharacter as Character, MorseString } from 'puzzle-lib';
import LocalStorageComponent from '../Data/LocalStorageComponent';

type Props = {};
type State = {
  plaintext: string
  morsetext: string
};

type SavedState = {
  plaintext: string
  morsetext: string};

class MorseBulkInput extends LocalStorageComponent<Props, State, SavedState> {

  private _plaintext: string = '';
  private _morsetext: string = '';
  private _plainInput?: HTMLInputElement;
  private _morseInput?: HTMLInputElement;
  private static readonly _invalidCharacterError: string = 'Invalid Input';
  // String to temporarily represent a multiple whitespace divider
  private static readonly _wordDivider: string = '__WORD_DIVIDER__'

  constructor(props: Props) {
    super(props);

    this.state = {
        plaintext: this._plaintext,
        morsetext: this._morsetext
    };
  }

  public render() {
    return (
      <div className="MorseBulkInput">
        <p className="MorseLabel">Text:</p>
        <FormControl
          className="MorseBulkInput-Plaintext"
          inputRef={(input: HTMLInputElement) => { this._plainInput = input; }}
          onChange={(event: FormEvent<FormControl>) => this.onTextChanged(event)}
          placeholder="Text"
          value={this.state.plaintext}
        />
        <p className="MorseLabel">Morse:</p>
        <FormControl
          className="MorseBulkInput-MorseText"
          inputRef={(input: HTMLInputElement) => { this._morseInput = input; }}
          onChange={(event: FormEvent<FormControl>) => this.onMorseChanged(event)}
          placeholder="Text"
          value={this.state.morsetext}
        />
        <ButtonToolbar className="MorseBulkInput-commands">
          <ButtonGroup>
            <Button onClick={(event: MouseEvent<Button>) => this.plainToMorse(event)}>Text to Morse</Button>
            <Button onClick={(event: MouseEvent<Button>) => this.morseToPlain(event)}>Morse to Text</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }

  public componentDidMount() {
    super.componentDidMount();

    if (this._plainInput) {
      this._plainInput.focus();
    }
  }

  protected plainToMorse(event: MouseEvent<Button>) {
    /*const element = (event.target as HTMLInputElement);
    this._morsetext = 
    this.updateState();*/
    // TODO: Should add "encode string to morse" into puzzle-lib
  }

  protected morseToPlain(event: MouseEvent<Button>) {
    try {
      this._plaintext = new MorseString(this.normalizeMorse(this._morsetext)).toString();
    } catch (e) {
      this._plaintext = MorseBulkInput._invalidCharacterError;
    }
    this.updateState();
  }

  protected normalizeMorse(morse: string) {
    // Multiple whitespace characters represent a word break
    let norm = morse.replace(/\s\s+/g, MorseBulkInput._wordDivider);
    // Single whitespace characters break up characters
    norm = norm.replace(/ /g, MorseString.CHARACTER_DIVIDER);
    return norm.replace(new RegExp(MorseBulkInput._wordDivider, 'g'), MorseString.WORD_DIVIDER);
  }

  protected getLocalStorageKey() {
    // If you change the type of the state object, update this key to avoid breaking
    // when restoring data
    return 'MorseBulkInput';
  }

  protected onSaveState() {
    return {
      plaintext: this._plaintext,
      morsetext: this._morsetext
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._plaintext = savedState.plaintext;
      this._morsetext = savedState.morsetext;
    }
  }

  protected onUpdateState() {
    this.setState({
      plaintext: this._plaintext,
      morsetext: this._morsetext
    });
  }

  protected onTextChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._plaintext = element.value;
    this.updateState();
  }

  protected onMorseChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._morsetext = element.value;
    this.updateState();
  }
}

export default MorseBulkInput;
