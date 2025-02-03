import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://jiyefbkcjfxvuccvtfhm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppeWVmYmtjamZ4dnVjY3Z0ZmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyNzQsImV4cCI6MjA1MzU0NDI3NH0.nQWD8FK01s3oF13xUQABbIo4m6m47T-bvTIrZ8l9dec')