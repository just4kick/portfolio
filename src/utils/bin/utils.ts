import config from '../../../config.json';

import * as bin from './index';

export const help = async (_args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (_args: string[]): Promise<string> => {
  return 'visitor';
};

export const date = async (_args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (_args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://portfoliogui-woad.vercel.app/', '_blank');
  }, 1000);


  return 'Loading ...';
};

export const email = async (_args: string[]): Promise<string> => {
  // window.open('mailto:hi@m4tt72.com');

  return 'sumitshar16@gmail.com';
};

export const vi = async (_args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (_args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (_args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(config.randomUrl);
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (_args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/just4kick/portfolio', '_blank');
  }, 1000);

  return 'Opening repository...';
};

// export const donate = async (_args?: string[]): Promise<string> => {
//   window.open(packageJson.funding.url, '_blank');

//   return 'Opening donation url...';
// };

export const banner = (_args?: string[]): string => {
  return`
 +==============================================+
 |      _           _   _  _   _    _      _    |
 |     | |         | | | || | | |  (_)    | |   |
 |     | |_   _ ___| |_| || |_| | ___  ___| | __|
 | _   | | | | / __| __|__   _| |/ / |/ __| |/ /|
 || |__| | |_| \\__ \\ |_   | | |   <| | (__|   < |
 | \\____/ \\__,_|___/\\__|  |_| |_|\\_\\_|\\___|_|\\_\\|
 +==============================================+
 Type 'help' to see list of available commands.
 `;
 };
