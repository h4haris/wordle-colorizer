# Wordle Colorizer
Wordle Colorizer - JS implementation

## Rules
- Any correct letter is highlighted as **"G"**
- Any incorrect position letter is highlighted as **"Y"**
- Any letter which is not in word i highlighted as **"B"**
- If any letter appears more than one, than highlight only first as **"Y"** for all on wrong postion.

```bash
"mamma" & "maxim" will result in 'GGYBB' instead of 'GGYYB'
```

- If any letter appears more than one but appear on correct position as well and no other instance of that letter is present in correct word, than highlight that as **"B"**.

```bash
"preen" & "alien" will result in 'BBBGG' instead of 'BBYGG'
```
