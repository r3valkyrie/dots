#               ____              _
#  _   ______ _/ / /____  _______(_)__
# | | / / __ `/ / //_/ / / / ___/ / _ \
# | |/ / /_/ / / ,< / /_/ / /  / /  __/
# |___/\__,_/_/_/|_|\__, /_/  /_/\___/
#                  /____/
#

# Opts
setopt extendedglob
setopt nobeep
setopt nobgnice
setopt nocheckjobs
setopt interactivecomments
setopt rcexpandparam
setopt prompt_subst

# General settings
umask 022
stty -ixon

# Environment variables
export EDITOR='vim'

# Prompt
autoload -Uz vcs_info
zstyle ':vcs_info:git:*' formats ' [%F{red}%b%f]'
precmd() { vcs_info }

PROMPT='%~${vcs_info_msg_0_} $ '

# Run tmux
if command -v tmux &> /dev/null && [ -n "$PS1" ] && [[ ! "$TERM" =~ screen ]] && [[ ! "$TERM" =~ tmux ]] && [ -z "$TMUX" ]; then
    exec tmux;
fi

command task
