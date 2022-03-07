import express from 'express';

import { sendEmails } from '../controller/email.js';

const router = express.Router();

router.post('/', sendEmails);

export default router;
