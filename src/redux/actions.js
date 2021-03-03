export function toggleSetting(setting, newSliderValue) {
  if (setting.target.value) {
    localStorage.board = '';
  }
  return {
    type: 'TOGGLE_SETTINGS',
    target: setting.target.name || setting.target.ariaLabel,
    value: setting.target.checked || setting.target.value || newSliderValue,
    payload: setting,
  };
}

export function toggleLang(lang) {
  return {
    type: 'TOGGLE_LANG',
    value: lang.target.value || lang.target.parentNode.value,
    payload: lang,
  };
}

export function toggleTheme(theme) {
  return {
    type: 'TOGGLE_THEME',
    value: theme.target.value || theme.target.parentNode.value,
    payload: theme,
  };
}

export function toggleScore(score) {
  console.log("score", score);
  return {
    type: 'TOGGLE_SCORE',
    value: score,
    payload: score,
  };
}
