## Setting Up Your Environment

### Build The Site Locally

To build the site, you need to go through a one-time installation
procedure that takes 15 to 30 minutes.  After that you can build the
site an unlimited number of times with no extra work.

#### Ubuntu

##### Install The Dependencies

```
sudo apt-get install git autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
```

##### Install rbenv

```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
```

From here, you should add ~/.rbenv/bin to your $PATH so that you can use rbenv's command line utility. Also adding ~/.rbenv/bin/rbenv init to your ~/.bash_profile will let you load rbenv automatically.

```
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```

Next, source rbenv by typing:

```
source ~/.bashrc
```

##### Install ruby-build

In order to use the rbenv install command, which simplifies the installation process for new versions of Ruby, you should install ruby-build, which we will install as a plugin for rbenv through git:

```
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

##### Install Ruby 2.4.1

To install Ruby 2.4.1, simply run this command:

```
rbenv install 2.4.1
```

Because of the existence of the `.ruby-version` file within the project `rbenv` can now use Ruby 2.4.1.

##### Install Bundle

Change directory to the top-level of your local repository so that rbenv will switch to Ruby 2.4.1 based on the `.ruby-version` file.

```
cd ioncoin.org
```

When you used rbenv to install Ruby, it also installed the `gem` program. Use that program to install bundle:

```
gem install bundler
```

##### Install the Ruby dependencies

While still in the top-level of your local repository install the necessary dependencies using Bundle:

```
bundle install
```

##### Preview The Site

```
bundle exec jekyll serve
```

This will compile the site and then print a message like this:

```
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

Visit the indicated URL in your browser to view the site.

#### macOS

##### Install The Dependencies

```
sudo apt-get install git autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
```

##### Install rbenv

```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
```

From here, you should add ~/.rbenv/bin to your $PATH so that you can use rbenv's command line utility. Also adding ~/.rbenv/bin/rbenv init to your ~/.bash_profile will let you load rbenv automatically.

```
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```

Next, source rbenv by typing:

```
source ~/.bashrc
```

##### Install ruby-build

In order to use the rbenv install command, which simplifies the installation process for new versions of Ruby, you should install ruby-build, which we will install as a plugin for rbenv through git:

```
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

##### Install Ruby 2.4.1

To install Ruby 2.4.1, simply run this command:

```
rbenv install 2.4.1
```

Because of the existence of the `.ruby-version` file within the project `rbenv` can now use Ruby 2.4.1.

##### Install Bundle

Change directory to the top-level of your local repository so that rbenv will switch to Ruby 2.4.1 based on the `.ruby-version` file.

```
cd ioncoin.org
```

When you used rbenv to install Ruby, it also installed the `gem` program. Use that program to install bundle:

```
gem install bundler
```

##### Install the Ruby dependencies

While still in the top-level of your local repository install the necessary dependencies using Bundle:

```
bundle install
```

##### Preview The Site

```
bundle exec jekyll serve
```

This will compile the site and then print a message like this:

```
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

Visit the indicated URL in your browser to view the site.

#### Ubuntu

##### Install The Dependencies

```
sudo apt-get install git autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
```

##### Install rbenv

```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
```

From here, you should add ~/.rbenv/bin to your $PATH so that you can use rbenv's command line utility. Also adding ~/.rbenv/bin/rbenv init to your ~/.bash_profile will let you load rbenv automatically.

```
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
```

Next, source rbenv by typing:

```
source ~/.bashrc
```

##### Install ruby-build

In order to use the rbenv install command, which simplifies the installation process for new versions of Ruby, you should install ruby-build, which we will install as a plugin for rbenv through git:

```
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

##### Install Ruby 2.4.1

To install Ruby 2.4.1, simply run this command:

```
rbenv install 2.4.1
```

Because of the existence of the `.ruby-version` file within the project `rbenv` can now use Ruby 2.4.1.

##### Install Bundle

Change directory to the top-level of your local repository so that rbenv will switch to Ruby 2.4.1 based on the `.ruby-version` file.

```
cd ioncoin.org
```

When you used rbenv to install Ruby, it also installed the `gem` program. Use that program to install bundle:

```
gem install bundler
```

##### Install the Ruby dependencies

While still in the top-level of your local repository install the necessary dependencies using Bundle:

```
bundle install
```

##### Preview The Site

```
bundle exec jekyll serve
```

This will compile the site and then print a message like this:

```
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

Visit the indicated URL in your browser to view the site.

#### macOS

##### Install The Dependencies

Install Homebrew by following their [instructions](https://brew.sh/).

##### Install rbenv

```
brew install rbenv
```

Run `rbenv init` and follow the instructions to set up rbenv integration with your shell. This is the step that will make running ruby "see" the Ruby version that you choose with rbenv.

Close your Terminal window and open a new one so your changes take effect.

##### Install Ruby 2.4.1

To install Ruby 2.4.1, simply run this command:

```
rbenv install 2.4.1
```

Because of the existence of the `.ruby-version` file within the project `rbenv` can now use Ruby 2.4.1.

##### Install Bundle

Change directory to the top-level of your local repository so that rbenv will switch to Ruby 2.4.1 based on the `.ruby-version` file.

```
cd ioncoin.org
```

When you used rbenv to install Ruby, it also installed the `gem` program. Use that program to install bundle:

```
gem install bundler
```

##### Install the Ruby dependencies

While still in the top-level of your local repository install the necessary dependencies using Bundle:

```
bundle install
```

##### Preview The Site

```
bundle exec jekyll serve
```

This will compile the site and then print a message like this:

```
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

Visit the indicated URL in your browser to view the site.
