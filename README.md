# QualiPolicy

A desktop application that improves policy management for brokerage and insurance companies

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

### Windows
For windows run

```sh
# Using npm
npm run windows

# OR using Yarn
yarn windows
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# Requirements

## Functional Requirements

- [ ] CRUD policies
- [ ] Search for policies by CPF or CNPJ
- [ ] Filter policies by time period and companies
- [ ] Display total for: Liquid prize; Brute prize; IOF and commission
- [ ] Export data as Excel
- [ ] Display data in an interactive dashboard
- [ ] Import data as .csv

## Non Functional Requirements

- [ ] Has windows OS support
- [ ] Persist user data
- [ ] Intuitive design
- [ ] Quick response time

# Data Modeling

## User Diagram
![image](https://github.com/user-attachments/assets/dc6d84c1-da1e-451c-8e4b-a0f724c8b7d2)

## ER Diagram
```mermaid
erDiagram
    CLIENT ||--o{ ADDRESS : have
    CLIENT ||--o{ POLICY : hires
    POLICY ||--o{ VEHICLE : have
    POLICY }|--|| INSURANCE_COMPANY : emits
    USER }|--|| CLIENT : manages

    CLIENT {
        string full_name
        string CPF_or_CNPJ
        string phone_number
    }

    ADDRESS {
        string street
        string number
        string complement
        string neighborhood
        string CEP
        string city
        string state
    }

    POLICY {
        number liquid_prize
        number commission
        number IOF
        string installment
        string payment_type
        string number
    }

    VEHICLE {
        string type
        string model
        string chassisNumber
        string carLicensePlate
        string franchiseType
    }

    INSURANCE_COMPANY {
        string name
        string link
    }

    USER {
        string email
        string password
        string name
    }
```

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
