#!/bin/bash

# Add 'use client' directive and convert links for each page

# index (home page)
echo "'use client';" > app/page.js
echo "" >> app/page.js
echo "import Link from 'next/link';" >> app/page.js
sed '1d' index.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/page.js

# what-is-biomining
echo "'use client';" > app/what-is-biomining/page.js
echo "" >> app/what-is-biomining/page.js
echo "import Link from 'next/link';" >> app/what-is-biomining/page.js
sed '1d' what-is-biomining.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/what-is-biomining/page.js

# fit-test
echo "'use client';" > app/fit-test/page.js
echo "" >> app/fit-test/page.js
echo "import Link from 'next/link';" >> app/fit-test/page.js
sed '1d' fit-test.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/fit-test/page.js

# mining-academia
echo "'use client';" > app/mining-academia/page.js
echo "" >> app/mining-academia/page.js
echo "import Link from 'next/link';" >> app/mining-academia/page.js
sed '1d' mining-academia.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/mining-academia/page.js

# research-priorities
echo "'use client';" > app/research-priorities/page.js
echo "" >> app/research-priorities/page.js
echo "import Link from 'next/link';" >> app/research-priorities/page.js
sed '1d' research-priorities.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/research-priorities/page.js

# for-biologists
echo "'use client';" > app/for-biologists/page.js
echo "" >> app/for-biologists/page.js
echo "import Link from 'next/link';" >> app/for-biologists/page.js
sed '1d' for-biologists.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/for-biologists/page.js

# for-miners
echo "'use client';" > app/for-miners/page.js
echo "" >> app/for-miners/page.js
echo "import Link from 'next/link';" >> app/for-miners/page.js
sed '1d' for-miners.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/for-miners/page.js

# glossary
echo "'use client';" > app/glossary/page.js
echo "" >> app/glossary/page.js
echo "import Link from 'next/link';" >> app/glossary/page.js
sed '1d' glossary.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/glossary/page.js

# complex-materials
echo "'use client';" > app/complex-materials/page.js
echo "" >> app/complex-materials/page.js
echo "import Link from 'next/link';" >> app/complex-materials/page.js
sed '1d' complex-materials.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/complex-materials/page.js

# flowsheets
echo "'use client';" > app/flowsheets/page.js
echo "" >> app/flowsheets/page.js
echo "import Link from 'next/link';" >> app/flowsheets/page.js
sed '1d' flowsheets.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/flowsheets/page.js

# research
echo "'use client';" > app/research/page.js
echo "" >> app/research/page.js
echo "import Link from 'next/link';" >> app/research/page.js
sed '1d' research.jsx | sed "s/<a/<Link/g; s/<\/a>/<\/Link>/g" >> app/research/page.js

echo "Pages converted!"
