# Use the Ubuntu base image
FROM node:18-alpine3.19

# Set the working directory
WORKDIR /

# Copy package.json and yarn.lock separately to leverage Docker layer caching
COPY package.json yarn.lock /

# set DB URL
ENV DATABASE_URL=postgresql://postgres:mysecretpass@ticketapp-network:5432/ticketappdb

# set Next auth secret
ENV NEXTAUTH_SECRET=Z5yMov+khgEDaHWO/Np4RESVTEmaTblgPECmL0s39GA=

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . /

# Initialize the SQLite-3 database
RUN npx prisma migrate dev --name init_schema

RUN npx prisma generate

# Build the application
RUN yarn build

EXPOSE 3000

# Start the application
CMD ["yarn", "start"]